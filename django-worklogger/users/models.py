from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils import timezone

from users.managers import CustomUserManager


# Create your models here.
class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.SlugField(max_length=100, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def _str_(self):
        return self.username

    class Meta:
        verbose_name_plural = 'Users'


