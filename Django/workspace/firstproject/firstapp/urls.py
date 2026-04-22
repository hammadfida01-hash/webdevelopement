from django.urls import path
from .views import *

urlpatterns=[
    path('home/',home,name='home'),
    path('about/',about,name='about'),
    path('saveEmployee/',saveEmployee,name='saveEmployee'),
    path('employeelist/',employeelist,name='employeelist'),
    path('recordupdate/',recordupdate,name='recordupdate'),
    path('recorddelete/',recorddelete,name='recorddelete'),
    path('newformemployee/',newformemployee,name="newformemployee"),
    path('updateemployeeform/',updateemployeeform,name="updateemployeeform"),
    path('signup/',signUp,name='signup'),
    path('saveUser/',saveUser,name='saveUser'),
    path('login/',login,name='login'),
    path('loginvalidation/',loginvalidation,name='loginvalidation'),
    path('logout/',logout,name='logout'),
]