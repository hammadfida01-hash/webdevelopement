from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from firstapp.models import Employee,User
from django.urls import reverse


def greeting(request):
    msg="Welcome to our first view"

    return HttpResponse(msg)

def home(request):
    try:
        realname=request.session['realname']
    except KeyError:
        url=reverse('login')
        return HttpResponseRedirect(url)
    
    quote='water the root,enjoy the fruit'
    res=render(request,'home.html',{'quote':quote})
    return res

# def home(request):
#     msg="Home"
#     return HttpResponse(msg)


def about(request):
    try:
        realname=request.session['realname']
    except KeyError:
        url=reverse('login')
        return HttpResponseRedirect(url)
    res=render(request,'about.html')
    return res
# def about(request):
#     msg="<h1>About</h1>" \
#     "<p1>This is paragraph</p1>"
#     return HttpResponse(msg)

def simple(request):
    try:
        realname=request.session['realname']
    except KeyError:
        url=reverse('login')
        return HttpResponseRedirect(url)
    msg="<h1>Simple Page</h1>"
    return HttpResponse(msg)


"""CRUD operations
C-create
R-retrieve(read)
U-update
D-delete    """


"""Crud opteration for Form"""


def saveEmployee(request):
    try:
        realname=request.session['realname']
    except KeyError:
        url=reverse('login')
        return HttpResponseRedirect(url)   # C of crud opertion insertion
    eno=request.POST['eno']
    ename=request.POST['ename']
    esal=request.POST['esal']
    emp=Employee(eno=eno,ename=ename,esal=esal)
    emp.save()
    url=reverse('employeelist')
    return HttpResponseRedirect(url)

def newformemployee(request):
    try:
        realname=request.session['realname']
    except KeyError:
        url=reverse('login')
        return HttpResponseRedirect(url)
    res=render(request,'new_emp_form.html')
    return res

def employeelist(request):
    try:
        realname=request.session['realname']
    except KeyError:
        url=reverse('login')
        return HttpResponseRedirect(url)   # R of crud operation retrieval get krna data
    emp=Employee.objects.all()
    res=render(request,'employeelist.html',{'emp':emp})
    return res

def updateemployeeform(request):
    try:
        realname=request.session['realname']
    except KeyError:
        url=reverse('login')
        return HttpResponseRedirect(url)
    id=request.GET['id']   # U of crud operation update
    employee=Employee.objects.filter(id=id).values()
    res=render(request,'update_emp_form.html',{'employee':employee[0]})
    return res

def recordupdate(request):
    try:
        realname=request.session['realname']
    except KeyError:
        url=reverse('login')
        return HttpResponseRedirect(url)
     # U of crud operation update
    id=request.POST['id']
    eno=request.POST['eno']
    ename=request.POST['ename']
    esal=request.POST['esal']
    emp=Employee(id=id,eno=eno,ename=ename,esal=esal)
    emp.save()
    url=reverse('employeelist')
    return HttpResponseRedirect(url)

def recorddelete(request):
    try:
        realname=request.session['realname']
    except KeyError:
        url=reverse('login')
        return HttpResponseRedirect(url)   # D of crud operation delete
    id=request.GET['id']
    emp=Employee.objects.filter(id=id)
    emp.delete()
    url=reverse('employeelist')
    return HttpResponseRedirect(url)


"""User registration and login"""

def signUp(request):
    d={}
    try:
        if request.GET['error']==str(1):
            d['errormsg']="Username already exists"
    except:
        d['errormsg']=''
    res=render(request,'signup.html',d)
    return res

def saveUser(request):
    user=User()
    u=User.objects.filter(username=request.POST['username'])
    if not u:
        user.username=request.POST['username']
        user.password=request.POST['password']
        user.realname=request.POST['realname']
        user.save()
        url=reverse('login')
    else:
        url=reverse('signup' ,query={'error':'1'})
    return HttpResponseRedirect(url)

def login(request):
    d={}
    try:
        if request.GET['error']==str(1):
            d['errormsg']="Invalid username or password"
    except:
        d['errormsg']=''
    res=render(request,'login.html',d)
    return res

def loginvalidation(request):
    try:
        user=User.objects.get(username=request.POST['username'],password=request.POST['password'])
        user.username
        request.session['username']=user.username
        request.session['realname']=user.realname
        url=reverse('home')
    except:
        # url='http://127.0.0.1:8000/firstapp/login/?error=1'
        url=reverse('login',query={'error':'1'})
    return HttpResponseRedirect(url)

def logout(request):
    request.session.clear()
    url=reverse('login')
    return HttpResponseRedirect(url)