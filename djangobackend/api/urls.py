from django.urls import path
from api import views

urlpatterns = [
    path('student/', views.StudentList.as_view(), name='student-list'),
    path('attendance/', views.record_attendance, name='record-attendance'),  # Make sure this is correct
]
