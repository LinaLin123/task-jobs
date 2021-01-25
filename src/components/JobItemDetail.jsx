import React from 'react'


export default function JobItemDetail({ job }) {



    return (
        <div>
   <h2>{job.title}</h2>
   <strong>{job.type}</strong>
<br></br>
   <a href={job.company_url}> {job.company_url} </a>
    <img src={job.company_logo} alt={job.company} height="100px" />
   
        <p dangerouslySetInnerHTML={{ __html: `${job.description}` }}></p>
    
        </div>
    )
}
