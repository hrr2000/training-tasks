from django.contrib import admin
from django.db import models
from .models import Project, WorkLog


def total_hours(self):
    return str(self.work_logs.all().aggregate(models.Sum('duration'))['duration__sum']) + ' hrs'


# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', total_hours)


class WorkLogAdmin(admin.ModelAdmin):
    list_display = ('remarks', 'user', 'project', 'duration')


admin.site.register(Project, ProjectAdmin)
admin.site.register(WorkLog, WorkLogAdmin)
