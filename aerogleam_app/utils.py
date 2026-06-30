import random

from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone


def generate_otp():

    return str(random.randint(100000, 999999))


def hash_otp(otp):

    return make_password(otp)


def verify_otp(plain_otp, hashed_otp):

    return check_password(
        plain_otp,
        hashed_otp,
    )


def otp_is_expired(created_at):

    if created_at is None:
        return True

    expiry = created_at + timezone.timedelta(minutes=10)

    return timezone.now() > expiry


def send_otp_email(email, otp, purpose="register"):
    if purpose == "register":

       subject = "Email Verification OTP"

       message = f"""
Hello,

Thank you for registering.

Your One-Time Password (OTP) is:

{otp}

This OTP will be used to verify your email address.

Do not share this code with anyone.

Regards,
Team Aerogleam
"""

    elif purpose == "reset_password":
        subject = "Password Reset OTP"

        message = f"""

Hello,

We received a request to reset your password.

Your One-Time Password (OTP) is:

{otp}

This OTP will be used to reset your password.

If you did not request this password reset, please ignore this email.

Regards,
Team Aerogleam
"""
        
    else:

         subject = "OTP Code"

         message = f"""
Your OTP is:

{otp}
"""         

    send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [email],
        fail_silently=False,
    )