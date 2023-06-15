from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django import forms

from .models import Address

class RegisterForm(UserCreationForm):

    class Meta:
        model = get_user_model()
        fields = ['email', 'phone_number', 'password1', 'password2']


class LoginForm(AuthenticationForm):
    def confirm_login_allowed(self, user):
        if not user.is_active:
            raise ValidationError(
                _("This account is inactive."),
                code='inactive',
            )

    class Meta:
        model = get_user_model()
        fields = ['email', 'password']
