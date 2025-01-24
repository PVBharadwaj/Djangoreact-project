from django.contrib import admin
from django.urls import path, include
from .views import home  # Import your view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'), 
    path('api/', include('api.urls'))
]
