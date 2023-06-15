
from django.urls import path
from . import views

app_name= 'ecommerce'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('product/<int:pk>', views. ProductView.as_view(), name='product'),
    path('cart', views.cart, name='cart'),
    path('checkout', views.checkout, name='checkout')
]