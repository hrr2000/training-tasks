from django.shortcuts import render, redirect
from django.db import models
from django.http import HttpResponse
from django.core import serializers
import datetime

from .utils import daterange
from .forms import WorkLogForm


# Create your views here.
def index(request):
    context = {}
    user = request.user
    if not request.user.is_authenticated:
        return redirect('users:login')

    if request.method == 'POST':
        form = WorkLogForm(request.POST)
        hours = user.work_logs.filter(day=datetime.datetime.strptime(request.POST['day'], '%Y-%m-%d')) \
            .aggregate(models.Sum('duration'))['duration__sum'] or 0

        if form.is_valid():
            if hours + float(request.POST['duration']) > 24:
                context['error_message'] = 'Input a duration with a sum of all last durations of 24 hours or less.'
            else:
                new_log = form.save(commit=False)
                new_log.user_id = request.user.id
                new_log.save()
                form = WorkLogForm()

    else:
        form = WorkLogForm()

    context['today_hours'] = user.work_logs \
        .filter(day__range=daterange()) \
        .aggregate(models.Sum('duration'))['duration__sum'] or 0
    context['week_hours'] = user.work_logs \
        .filter(day__range=daterange(start=-6, end=0)) \
        .aggregate(models.Sum('duration'))['duration__sum'] or 0
    context['month_hours'] = user.work_logs \
        .filter(day__range=daterange(start=-29, end=0)) \
        .aggregate(models.Sum('duration'))['duration__sum'] or 0

    context['user'] = request.user
    context['form'] = form

    return render(request, 'logger/index.html', context=context)


def day_logs(request):
    user = request.user
    data = user.work_logs.filter(day=datetime.datetime.strptime(request.GET['day'], '%Y-%m-%d')).prefetch_related('project')
    return HttpResponse(serializers.serialize('json', data, use_natural_foreign_keys=True),
                        content_type='application/json')
