import React from "react";
import JobItem from "./JobItem";

export default function JobList({ jobList }) {
    
  function renderList() {
    if (jobList.length === 0) {
      return <h3>No jobs found</h3>;
    } else {
      return jobList.map((jobItem) => {
        return <JobItem key={jobItem.id} job={jobItem} />;
      });
    }
  }
  return <div className="container">{jobList && renderList()}</div>;
}
