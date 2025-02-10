import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BackButton, Card, Container, JobDescription, JobDetailLabel, JobDetailRow, JobDetailsContainer, JobDetailValue, PageTitle, Title } from "./jobDetailsStyles";
import { useQuery } from '@tanstack/react-query';
import { fetchJobById } from "../../apis/getJob";


const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const { data: job, isLoading, error } = useQuery({
    queryKey: ['job', jobId],
    queryFn: () => fetchJobById(jobId),
  });
  
  console.log("data", job);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching job details</p>;

  return (
    <Container>
      <BackButton onClick={() => navigate("/")} />
      <PageTitle>JOB DETAILS PAGE</PageTitle>
      <Card>
        <Title>{job.req_name}</Title>
        <JobDetailsContainer>
          <JobDetailRow>
            <JobDetailLabel>Job ID:</JobDetailLabel>
            <JobDetailValue>{job.id}</JobDetailValue>
          </JobDetailRow>
          <JobDetailRow>
            <JobDetailLabel>Location:</JobDetailLabel>
            <JobDetailValue>{`${job.location.city}, ${job.location.state}`}</JobDetailValue>
          </JobDetailRow>
          <JobDetailRow>
            <JobDetailLabel>Status:</JobDetailLabel>
            <JobDetailValue>{job.status}</JobDetailValue>
          </JobDetailRow>
          <JobDetailRow>
            <JobDetailLabel>Postings:</JobDetailLabel>
            <JobDetailValue>
              {job.postings?.map((posting) => (
                <div key={posting.id}>
                  <span>{posting.sitename}</span> ({posting.duration} days)
                </div>
              ))}
            </JobDetailValue>
          </JobDetailRow>
        </JobDetailsContainer>
        <JobDetailLabel>Description:</JobDetailLabel>
        <JobDescription>{job.description}</JobDescription>
      </Card>
    </Container>
  );
};

export default JobDetails;
