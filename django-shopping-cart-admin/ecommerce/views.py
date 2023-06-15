from django.shortcuts import redirect, render
from django.views.generic import ListView, DetailView
from django.db import transaction
from django.db.models import F

from .models import Product, ProductSale

# Create your views here.
class IndexView(ListView):
    model = Product
    template_name = 'ecommerce/index.html'


class ProductView(DetailView):
    model = Product
    template_name = 'ecommerce/product.html'

def checkout(request):
    if request.method == 'POST':
        ProductSale.objects.filter(status=ProductSale.IN_CART, user=request.user).update(status=ProductSale.IS_SOLD)
    return render(request, 'ecommerce/cart.html', {'message': 'Payment Completed Successfully!'})

def cart(request):
    if request.method == 'GET':
        cart_items = ProductSale.objects.filter(status=ProductSale.IN_CART, user=request.user)
        return render(request, 'ecommerce/cart.html', {'cart_items': cart_items})

    else:
        quantity = int(request.POST['quantity'])
        product_id = int(request.POST['product_id'])
        product = Product.objects.get(pk=product_id)
        product_sale = ProductSale.objects.filter(product=product, user=request.user, status=ProductSale.IN_CART).first()

        if product_sale is not None:
            new_stock = 0
            if request.POST['_method'] == 'PUT':
                new_stock = product.stock - quantity + product_sale.quantity
            elif request.method == 'POST':
                new_stock = product.stock - quantity

            if new_stock < 0:
                return redirect('ecommerce:cart')
            product.stock = new_stock

            with transaction.atomic():
                product.save()

                if request.POST['_method'] == 'PUT':
                    product_sale.quantity = quantity
                elif request.method == 'POST':
                    product_sale.quantity += quantity

                if product_sale.quantity == 0:
                    product_sale.delete()
                else:
                    product_sale.save()

        else:
            if (quantity > 0) and (quantity <= product.stock):
                product_sale = ProductSale.objects.create(quantity=quantity, user=request.user, product=product)
                product.stock = F('stock') - quantity
                with transaction.atomic():
                    product.save()
                    product_sale.save()

    return redirect('ecommerce:cart')
