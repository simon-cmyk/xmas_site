from django.urls import path
from .views import get_advent_data

urlpatterns = [
    path('advent_data/<int:day>/', get_advent_data, name='advent_data'),
]