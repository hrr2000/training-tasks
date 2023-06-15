from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    def natural_key(self):
        return self.name


class WorkLog(models.Model):
    user = models.ForeignKey(get_user_model(), related_name='work_logs', on_delete=models.CASCADE)
    project = models.ForeignKey(Project, related_name='work_logs', null=True, on_delete=models.SET_NULL)
    duration = models.FloatField()
    remarks = models.CharField(max_length=200)
    day = models.DateField()

    def __str__(self):
        return self.remarks


