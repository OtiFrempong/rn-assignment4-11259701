import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>${job.salary}/y - {job.location}</p>
    </div>
  );
};

export default JobCard;