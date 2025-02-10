import os
import json
from django.conf import settings
from rest_framework import status
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from job_management_app.serializers import JobSerializer
from job_management_app.pagination import StandardResultSetPagination
# Create your views here.

class JobListView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = JobSerializer
    pagination_class = StandardResultSetPagination

    def get_queryset(self):
        file_path = os.path.join(settings.BASE_DIR, 'jobs.json')
        with open(file_path, 'r') as file:
            data = json.load(file)
        return data

class JobDetailView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, id, *args, **kwargs):
        file_path = os.path.join(settings.BASE_DIR, 'jobs.json')
        with open(file_path, 'r') as file:
            jobs = json.load(file)
        job = next((job for job in jobs if job.get('id') == id), None)

        if job:
            serializer = JobSerializer(job)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"detail": "Job not found"}, status=status.HTTP_404_NOT_FOUND)
