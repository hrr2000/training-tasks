from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from users.managers import CustomUserManager

# Create your models here.
class City(models.Model):  # depends on the presence of API
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Cities'


class Address(models.Model):
    street = models.CharField(max_length=100)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    postalcode = models.CharField(max_length=18)
    type = models.CharField(max_length=20, choices=[('B', 'billing'), ('S', 'shipping')])
    user = models.OneToOneField('CustomUser', related_name='address', on_delete=models.DO_NOTHING, null=True)

    def __str__(self):
        return self.street + ' - ' + self.city.name


class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = None
    email = models.EmailField(_('Email Address'), unique=True)
    phone_number = models.CharField(max_length=18)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)
    billing_address = models.OneToOneField(Address, related_name='billing_addresses', on_delete=models.SET_NULL, null=True)
    shipping_address = models.OneToOneField(Address, related_name='shipping_addresses', on_delete=models.SET_NULL, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def _str_(self):
        return self.email

    class Meta:
        verbose_name_plural = 'Users'


