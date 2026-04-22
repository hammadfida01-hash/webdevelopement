from django.urls import path
from .views import *

urlpatterns = [
    path('getbooks/',getbooks),
    path('setBooks/',setBooks),
]