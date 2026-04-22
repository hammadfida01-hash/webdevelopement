from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def setBooks(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        bookid = data.get('bookid')
        title = data.get('title')
        price = data.get('price')

        print('received data:', bookid, title, price)
        return JsonResponse({'message':'Book added successfully'},status=200)
    return JsonResponse({'error': 'Invalid request method'}, status=400)
def getbooks(request):
    # list of dict
    books = [
        {'bookid': 1, 'title': 'Python', 'price': '500.00'},
        {'bookid': 2, 'title': 'HTML', 'price': 29.99},
        {'bookid': 3, 'title': 'CSS', 'price': 19.99},
    ]
    return JsonResponse(books,safe=False)

