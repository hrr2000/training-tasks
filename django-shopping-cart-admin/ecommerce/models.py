from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
from django.db import transaction
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError


from .utils import model_files_path


app_name = 'ecommerce'

# Create your models here.
class Currency(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10)
    symbol = models.CharField(max_length=1)

    def __str__(self):
        return self.code + ' (' + self.name + ')'

    class Meta:
        verbose_name_plural = 'Currencies'


class Product(models.Model):
    name = models.CharField(max_length=255)
    sku = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(decimal_places=2, max_digits=12)
    currency = models.ForeignKey(Currency, on_delete=models.DO_NOTHING)
    stock = models.IntegerField(default=0, editable=False)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    image = models.ImageField(upload_to=model_files_path(file_type='image', model_name='products'))
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')


class ProductPurchase(models.Model):
    quantity = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    readonly = ['created_at']
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        pk = self.pk
        with transaction.atomic():
            super().save(*args, **kwargs)
            if not pk:
                self.product.stock += self.quantity
                self.product.save()


class ProductSale(models.Model):

    quantity = models.IntegerField()
    unit_price = models.DecimalField(decimal_places=2, max_digits=12, editable=False)
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    readonly = ['created_at']
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    IN_CART = 'C'
    IS_SOLD = 'S'

    status = models.CharField(max_length=1, default=IN_CART, choices=[
        (IN_CART, 'Cart'),
        (IS_SOLD, 'Sold')
    ])

    def save(self, *args, **kwargs):
        self.unit_price = self.product.price
        super().save(*args, **kwargs)
