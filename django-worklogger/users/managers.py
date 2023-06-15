from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):

    def create_user(self, username, password, **extra_fields):
        if not username:
            raise ValueError(_('Username must be set!'))
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if not extra_fields.get('is_staff'):
            raise ValueError(_('Super user must have is_stuff = True'))

        if not extra_fields.get('is_superuser'):
            raise ValueError(_('Super user must have is_superuser = True'))

        return self.create_user(username, password, **extra_fields)
