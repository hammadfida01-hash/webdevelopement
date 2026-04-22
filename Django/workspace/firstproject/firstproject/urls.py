"""
URL configuration for firstproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from firstapp import views as v1
urlpatterns = [
    path('',v1.greeting),
    path('hammad/',include('exam.urls')),
    path('firstapp/',include('firstapp.urls')),
    path('simple/',v1.simple),
    path('admin/', admin.site.urls),
]

"""urlpatterns = [
    path('hello',views.greeting),
    path('admin/', admin.site.urls),
]"""
"""browser pr dekho localhost:8000 ky bad hello likha hga url ma"""