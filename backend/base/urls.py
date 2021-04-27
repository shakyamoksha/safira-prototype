from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('products/', views.getAllProducts, name="products"),
    path('product/<str:pk>/', views.getProduct, name="product"),
]
