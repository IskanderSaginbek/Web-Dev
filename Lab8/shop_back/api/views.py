from rest_framework import viewsets
from django.http import JsonResponse, HttpResponse

from .models import Product, Category
from shop_back.serializers import ProductSerializer

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

def Products(request):
    return JsonResponse(list(Product.objects.values()), safe=False)

def ProductById(request,id_):
    return JsonResponse(list(Product.objects.filter(id=id_).values()), safe=False)

def Categories(request):
    return JsonResponse(list(Category.objects.values()), safe=False)

def CategoryById(request,id_):
    return JsonResponse(list(Category.objects.filter(id=id_).values()), safe=False)

def CategoryProducts(request,id_):
    return JsonResponse(list(Product.objects.filter(cat_id=id_).values()), safe=False)