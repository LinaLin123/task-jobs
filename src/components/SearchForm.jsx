import React, { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../contexts/SearchContextProvider'
import JobList from "./JobList";
import '../App.css';


export default function SearchForm() {

const { jobList,setSearchDataInput, getJobList } = useContext(SearchContext)


return (
  <div>
    <div>
      <input className="searchInput"
        type="text"
        placeholder="Looking for new job...bored at you old one?"
        onChange={(e) => setSearchDataInput(e.target.value)}
      />
      <button onClick={() => getJobList()}>Search job</button>
    </div>

    <div className="container">{jobList && <JobList jobList={jobList} />}</div>
  </div>
);
}
