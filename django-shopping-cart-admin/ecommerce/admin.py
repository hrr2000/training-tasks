from django.contrib import admin
from .models import Product, ProductImage, Currency, ProductSale, ProductPurchase
from users.models import Address, City


# Register your models here.
class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class AddressInline(admin.TabularInline):
    model = Address


class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ProductImageInline,
    ]
    list_display = ['name', 'sku', 'price', 'currency', 'stock']


class AddressAdmin(admin.ModelAdmin):
    list_filter = ['type']
    list_display = ['street', 'city', 'postalcode', 'type']


class ProductSaleAdmin(admin.ModelAdmin):
    list_display = ['product', 'user', 'unit_price', 'quantity', 'total_amount', 'created_at']

    def total_amount(self, sale):
        return '${:2f}'.format(sale.quantity * sale.unit_price)


class ProductPurchaseAdmin(admin.ModelAdmin):
    list_display = ['product', 'user', 'quantity', 'created_at']


admin.site.register(Product, ProductAdmin)
admin.site.register(Address, AddressAdmin)
admin.site.register(ProductSale, ProductSaleAdmin)
admin.site.register(ProductPurchase, ProductPurchaseAdmin)
admin.site.register([City, Currency])
