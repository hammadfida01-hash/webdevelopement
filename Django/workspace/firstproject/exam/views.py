from django.shortcuts import render
from django.http import HttpResponse
def paper(request):
   
   # file direct html likh kr return krny ka tarika
    """
    msg="<h1>Test Paper-1</h1>"   use backslash ko next line
    "<p1>Calculate the factorial of n number through function</p1>
    return HttpResponse(msg)  """
    
    # with template technique
    que="Variable which we can use in html"
    optiona="int"
    optionb="del"
    optionc="bool"
    optiond="add"
    answer="option b del"
    show_answer=True

    d={
        'que':que,
        'optiona':optiona,
        'optionb':optionb,
        'optionc':optionc,
        'optiond':optiond,
        'answer':answer,
        'show_answer':show_answer
    }
    res=render(request,'paper.html',d)   
    return res
