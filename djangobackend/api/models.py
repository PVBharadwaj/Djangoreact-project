from django.db import models

class Student(models.Model):
    stuname = models.CharField(max_length=100)
    email = models.EmailField() 

    def __str__(self):
        return self.stuname


class Attendance(models.Model):
    roll_no = models.IntegerField(default=0)  # Make sure this field exists
    name = models.CharField(max_length=100, default="Default Name")  # Make sure this field exists
    email = models.EmailField(default="default@example.com")  # Make sure this field exists
    present = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {'Present' if self.present else 'Absent'}"