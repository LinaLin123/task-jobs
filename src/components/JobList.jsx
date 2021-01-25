import React from 'react'
import JobItem from './JobItem'

export default function JobList({ jobList }) {
 
    function renderList() {
        if (jobList.length === 0) {
          return <p>No jobs found</p>;
        } else {
          return jobList.map(jobItem => {
            return <JobItem key={jobItem.id} data={jobItem} />;
          });
        }
      }
      return <div><ul>{jobList && renderList()}</ul></div>;
    }