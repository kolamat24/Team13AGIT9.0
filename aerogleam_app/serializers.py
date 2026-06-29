from rest_framework import serializers
from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = User
        fields = [
            "full_name",
            "email",
            "password",
        ]

    def create(self, validated_data):
        user = User.objects.create_user(
            full_name=validated_data["full_name"],
            email=validated_data["email"],
            password=validated_data["password"],
        )

        return user

class VerifyOTPSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField(max_length=6)

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

class ForgotPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()

class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField(max_length=6)
    new_password = serializers.CharField(
        write_only=True,
        min_length=8
    )

class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            "id",
            "full_name",
            "email",
            "is_verified",
            "date_joined",
        ]