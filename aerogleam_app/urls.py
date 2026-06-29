from django.urls import path
from .views import RegisterView, VerifyOTPView, LoginView, LogoutView,ForgotPasswordView, ResetPasswordView
from .views import ProfileView

urlpatterns = [
    path("auth/register/", RegisterView.as_view(), name="register"),
    path("auth/verify-otp/", VerifyOTPView.as_view(), name="verify-otp"),
    path("auth/login/", LoginView.as_view(), name="login"),
    path("auth/logout/", LogoutView.as_view(), name="logout"),
    path("auth/forgot-password/", ForgotPasswordView.as_view(), name="forgot-password"),
    path("auth/reset-password/", ResetPasswordView.as_view(), name="reset-password"),
    path("auth/profile/", ProfileView.as_view(), name="profile"),
]