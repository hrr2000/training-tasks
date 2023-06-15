from django.forms import ModelForm
from django import forms
from .models import WorkLog
from django.forms.widgets import TextInput


class DateInput(TextInput):
    input_type = 'date'


class WorkLogForm(ModelForm):
    day = forms.CharField(widget=DateInput)

    class Meta:
        model = WorkLog
        fields = ['duration', 'project', 'remarks', 'day']