from django.contrib.auth import authenticate
from django.utils import timezone
from .utils import hash_otp
from .utils import verify_otp
from .utils import otp_is_expired
from rest_framework.permissions import IsAuthenticated
from rest_framework import serializers
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken    
from .serializers import RegisterSerializer, VerifyOTPSerializer, LoginSerializer, LogoutSerializer, ForgotPasswordSerializer, ResetPasswordSerializer, UserProfileSerializer
from .utils import generate_otp, send_otp_email
from .models import User


class RegisterView(APIView):

    def post(self, request):

        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():

            user = serializer.save()

            otp = generate_otp()

            user.otp = hash_otp(otp)
            user.otp_created_at = timezone.now()

            user.save()

            send_otp_email(user.email, otp)

            return Response(
                {
                    "message": "Registration successful. Please check your email for the OTP."
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerifyOTPView(APIView):

    def post(self, request):

        serializer = VerifyOTPSerializer(data=request.data)

        if serializer.is_valid():

            email = serializer.validated_data["email"]
            otp = serializer.validated_data["otp"]

            try:
                user = User.objects.get(email=email)

            except User.DoesNotExist:
                return Response(
                    {"error": "User not found"},
                    status=status.HTTP_404_NOT_FOUND,
                )

            if otp_is_expired(user.otp_created_at):
                return Response(
                    {"error": "OTP has expired"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            if not verify_otp(otp, user.otp):
                return Response(
                    {
                        "error": "Invalid OTP"
                    },
                    status=status.HTTP_400_BAD_REQUEST
                )
 

            user.is_verified = True
            user.otp = None
            user.otp_created_at = None
            user.save()

            return Response(
                {
                    "message": "Email verified successfully."
                },
                status=status.HTTP_200_OK,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(APIView):

    def post(self, request):

        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():

            email = serializer.validated_data["email"]
            password = serializer.validated_data["password"]

            user = authenticate(
                request,
                email=email,
                password=password,
            )

            if user is None:
                return Response(
                    {"error": "Invalid email or password"},
                    status=status.HTTP_401_UNAUTHORIZED,
                )

            if not user.is_verified:
                return Response(
                    {"error": "Please verify your email before logging in."},
                    status=status.HTTP_403_FORBIDDEN,
                )

            refresh = RefreshToken.for_user(user)

            return Response(
                {
                    "message": "Login successful.",
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                },
                status=status.HTTP_200_OK,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LogoutView(APIView):

    def post(self, request):

        serializer = LogoutSerializer(data=request.data)

        if serializer.is_valid():

            try:
                refresh_token = serializer.validated_data["refresh"]

                token = RefreshToken(refresh_token)
                token.blacklist()

                return Response(
                    {
                        "message": "Logout successful."
                    },
                    status=status.HTTP_200_OK,
                )

            except Exception:

                return Response(
                    {
                        "error": "Invalid refresh token."
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ForgotPasswordView(APIView):

    def post(self, request):

        serializer = ForgotPasswordSerializer(data=request.data)

        if serializer.is_valid():

            email = serializer.validated_data["email"]

            try:
                user = User.objects.get(email=email)

            except User.DoesNotExist:
                return Response(
                    {"error": "User not found."},
                    status=status.HTTP_404_NOT_FOUND,
                )

            otp = generate_otp()

            user.otp = hash_otp(otp)
            user.otp_created_at = timezone.now()
            user.save()

            send_otp_email(user.email, otp, purpose="reset_password")

            return Response(
                {
                    "message": "OTP has been sent to your email."
                },
                status=status.HTTP_200_OK,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ResetPasswordView(APIView):

    def post(self, request):

        serializer = ResetPasswordSerializer(data=request.data)

        if serializer.is_valid():

            email = serializer.validated_data["email"]
            otp = serializer.validated_data["otp"]
            new_password = serializer.validated_data["new_password"]

            try:
                user = User.objects.get(email=email)

            except User.DoesNotExist:
                return Response(
                    {"error": "User not found."},
                    status=status.HTTP_404_NOT_FOUND,
                )

            if otp_is_expired(user.otp_created_at):
                return Response(
                    {"error": "OTP expired."},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            if not verify_otp(otp, user.otp):
                return Response(
                    {"erroe": "Invalid OTP"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            user.set_password(new_password)
            user.otp = None
            user.otp_created_at = None
            user.save()

            return Response(
                {
                    "message": "Password reset successfully."
                },
                status=status.HTTP_200_OK,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ProfileView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        serializer = UserProfileSerializer(request.user)

        return Response(serializer.data)