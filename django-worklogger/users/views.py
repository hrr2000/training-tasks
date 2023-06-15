from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect

from .forms import RegisterForm, LoginForm


# Create your views here.
def register_view(request):
    if request.user.is_authenticated:
        return redirect('logger:index')
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('users:login')
    else:
        form = RegisterForm()
    return render(request, 'users/register.html', context={'form': form})


def login_view(request):
    if request.user.is_authenticated:
        return redirect('logger:index')
    if request.method == 'POST':
        form = LoginForm(data=request.POST)
        if form.is_valid():
            user = authenticate(username=request.POST['username'], password=request.POST['password'])
            login(request, user)
            return redirect('logger:index')
    else:
        form = LoginForm()
    return render(request, 'users/login.html', {'form': form})


def logout_view(request):
    if request.user.is_authenticated:
        logout(request)
    return redirect('users:login')

