from django.shortcuts import render
from .models import SmartBin, SmartBinLog
from django.http import HttpResponse
import datetime
import json

# Create your views here.
def Sensor_Api (request, uuid):
    if(request.method == "Get"):
        smartBin = SmartBin.objects.get(uuid = uuid)
        status = str(smartBin.current_status)
        return HttpResponse(status)
    else:
        new_info = request.POST
        print(new_info)
        new_status = json.loads(new_info)
        binCode = new_status["bincode"]
        is_filled = new_status["isFilled"]
        smartLog = SmartBinLog()
        smartLog.set_smartbin(binCode)
        smartLog.isFilled = is_filled
        smartLog.date_logged= datetime.datetime.date()
        smartLog.save()



        