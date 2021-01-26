import React, { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContextProvider'
import JobList from "./JobList";
import '../App.css';


export default function SearchForm() {

const { jobList,setSearchDataInput, getJobList } = useContext(SearchContext)

function handleOnClick(e) {
return getJobList()
}

return (
  <div className="wrapper2">
      <input className="searchInput"
        type="text"
        placeholder="Looking for a new job..."
        onChange={(e) => setSearchDataInput(e.target.value)}
      />
      <button className="btn" onClick={handleOnClick}>Search</button>
  
    {jobList && <JobList jobList={jobList} />}
  </div>
);
}
