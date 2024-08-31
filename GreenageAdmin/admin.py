from django.contrib import admin

# Register your models here.
from .models import SmartBin, SmartBinLog, Customer

# admin.site.register(SmartBin, SmartBinAdmin)
class SmartBinAdmin(admin.ModelAdmin):
    list_display=('unique_id', 'customer', "created_by", "current_status", "date_created")

admin.site.register(SmartBin,SmartBinAdmin)
admin.site.register(SmartBinLog)
admin.site.register(Customer)