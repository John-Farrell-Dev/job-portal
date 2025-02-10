from django.urls import path
from job_management_app.views import JobDetailView, JobListView

urlpatterns = [
    path('JobList', JobListView.as_view()),
    path('JobDetail/<int:id>', JobDetailView.as_view()),
]
