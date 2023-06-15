from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.forms import inlineformset_factory
from django.contrib.auth import get_user_model
from django.db import transaction

from .forms import RegisterForm, LoginForm
from .models import Address


# Create your views here.
def register_view(request):
    if request.user.is_authenticated:
        return redirect('ecommerce:index')
    address_form_set = inlineformset_factory(get_user_model(), Address, fields=['street', 'city'], can_delete=False, fk_name='user', extra=1)
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        address_form_set = address_form_set(request.POST)
        if form.is_valid():
            with transaction.atomic():
                user = form.save()
                idx = 0
                shipping_address = None
                billing_address = None
                for form in address_form_set:
                    data = form.cleaned_data
                    if idx == 0:
                        shipping_address = Address.objects.create(street=data['street'], city=data['city'], user=user)
                    if idx == 1:
                        billing_address = Address.objects.create(street=data['street'], city=data['city'], user=user)
                    idx += 1
                if address_form_set.is_valid():
                    user.shipping_address = shipping_address
                    user.billing_address = billing_address
                    user.save()
                    return redirect('users:login')
    else:
        form = RegisterForm()
    return render(request, 'users/register.html', context={'form': form, 'address_form_set': address_form_set})


def login_view(request):
    if request.user.is_authenticated:
        return redirect('ecommerce:index')

    if request.method == 'POST':
        form = LoginForm(data=request.POST)
        if form.is_valid():
            user = authenticate(username=request.POST['username'], password=request.POST['password'])
            login(request, user)
            return redirect('ecommerce:index')
    else:
        form = LoginForm()

    return render(request, 'users/login.html', {'form': form})


def logout_view(request):
    if request.user.is_authenticated:
        logout(request)

    return redirect('users:login')

