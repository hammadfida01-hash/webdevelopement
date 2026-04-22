from django.db import models

# Create your models here.
class Employee(models.Model):
    eno=models.IntegerField()
    ename=models.CharField(max_length=45)
    esal=models.FloatField()

    def __str__(self):
        return self.ename
    

class User(models.Model):
    username=models.CharField(max_length=25,primary_key=True)
    password=models.CharField(max_length=20)
    realname=models.CharField(max_length=20)

    