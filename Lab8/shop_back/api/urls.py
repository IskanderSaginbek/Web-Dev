from django.urls import path
from . import views

urlpatterns = [
    path('api/products', views.Products, name='products'),
    path('api/products/<int:id_>', views.ProductById, name='product'),
    path('api/categories', views.Categories, name='category'),
    path('api/categories/<int:id_>', views.CategoryById, name='categories'),
    path('api/categories/<int:id_>/products', views.CategoryProducts, name='category products'),
]