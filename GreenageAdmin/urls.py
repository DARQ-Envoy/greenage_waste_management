from django.urls import path, include
from . import views 
urlpatterns=[
    path("", views.Sensor_Api, name="get_and_set_status")
]