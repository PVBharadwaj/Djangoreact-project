from django.contrib import admin
from .models import Student, Attendance
# Register your models here.
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display=['id','stuname','email']

@admin.register(Attendance)
class AttendanceAdmin(admin.ModelAdmin):
    list_display = ['roll_no', 'name', 'email', 'present'] 