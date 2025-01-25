from django.shortcuts import render
from .serializers import StudentSerializer
from rest_framework.generics import ListAPIView
from .models import Student, Attendance
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Student List View
class StudentList(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


# Record Attendance API View
@api_view(['POST'])
def record_attendance(request):
    try:
        # Get the attendance data from the POST request
        attendance_data = request.data  

        # Save attendance data to the database
        for record in attendance_data:
            student_id = record.get('student_id')  # Assuming you're sending student_id
            present = record.get('present')
            
            # Retrieve the student instance
            student = Student.objects.get(id=student_id)
            
            # Create a new attendance record
            Attendance.objects.create(student=student, present=present)
        
        # Respond with a success message
        return Response({"message": "Attendance recorded successfully"}, status=201)
    except Exception as e:
        # Handle any errors that occur
        return Response({"error": str(e)}, status=400)
