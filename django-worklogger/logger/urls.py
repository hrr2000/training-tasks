from django.urls import path
from . import views

app_name = 'logger'

urlpatterns = [
    path('', views.index, name='index'),
    path('logs', views.day_logs, name='logs')
]