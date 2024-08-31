import uuid
# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
# from django.contrib import admin
import datetime
from django.contrib.auth import get_user
# Create your models here.

class  Customer(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    location_coordinates = models.CharField(max_length=200)
    def __str__(self):
        return self.first_name
    


class SmartBin(models.Model):
    unique_id=models.UUIDField(default=uuid.uuid4,
    editable=False, 
    unique=True)
    customer= models.ForeignKey(
        Customer,
        on_delete=models.SET_NULL,
        related_name="smart_bin_user",
        null=True,
        # limit_choices_to={"is_superuser":False}
        )
    created_by= models.ForeignKey(
        User, 
        editable=False,
        on_delete=models.SET_NULL,
        related_name="smart_bin_manager",
        null=True
        # limit_choices_to={"is_superuser": True}
        )
    current_status = models.BooleanField("Bin is full", default=False)
    date_created = models.DateField(auto_now_add=True)
    # def save(self,*args,**kwargs):
    #     if not self.created_by:
    #         user = get_user()
    #         if user.is_superuser:
    #             self.created_by = user
    #     super().save(*args, **kwargs)
    
# def clearBin():
#     allBins = SmartBin.objects.all()
#     for bin in allBins:
#         print(bin)
#         bin.delete()
#     return SmartBin.objects.all()

# clearBin()
    # def save(self, *arg, **kwargs):
    #     if not self.pk:
    #         self.created_by= get_current_user()
    #     super().save(*arg, **kwargs)

class SmartBinLog(models.Model):
    smartBin = models.ForeignKey(SmartBin, on_delete=models.CASCADE)
    isFilled= models.BooleanField()
    date_logged = models.DateField(auto_now_add=True, editable=False)

    def set_smartbin(self, uuid):
        try:
            smart_bin = SmartBin.objects.get(uuid= uuid)
            self.smartBin= smart_bin
            return smart_bin
        except SmartBin.DoesNotExist:
            return None
    





