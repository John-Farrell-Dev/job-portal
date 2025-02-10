import React from "react";
import { JobLink, Table, TableContainer, TableData, TableHead, TableHeader, TableRow, TableTitle } from "./jobTableStyles";
import { fetchJobs } from "../../apis/getAllJobs";
import { useQuery } from '@tanstack/react-query';

const JobTable = () => {
  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  });


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching jobs</p>;

  
  if (!Array.isArray(jobs)) {
    return <p>No jobs available or invalid response format</p>;
  }

  return (
    <TableContainer>
      <TableTitle>JOB POSTINGS</TableTitle>
      <Table>
        <TableHead>
          <tr>
            <TableHeader>#</TableHeader>
            <TableHeader>Job Title</TableHeader>
            <TableHeader>Location</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Postings</TableHeader>
          </tr>
        </TableHead>
        <tbody>
          {jobs.map((job, index) => (
            <TableRow key={job.id}>
              <TableData>{job.id}</TableData>
              <TableData>
                <JobLink to={`/job/${job.id}`}>{job.req_name}</JobLink>
              </TableData>
              <TableData>{`${job.location.city}, ${job.location.state}`}</TableData>
              <TableData>{job.status}</TableData>
              <TableData>
                {job.postings?.map((posting) => (
                  <div key={posting.id}>
                    <span>{posting.sitename}</span> ({posting.duration} days)
                  </div>
                ))}
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default JobTable;
