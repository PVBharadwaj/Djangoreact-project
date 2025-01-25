from django.contrib import admin
from django.urls import path, include
from .views import home  # Import the home view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),  # Home page route
    path('api/', include('api.urls')),  # Delegates all API routes to `api.urls`
]
