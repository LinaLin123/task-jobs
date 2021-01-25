import React, { createContext, useState } from 'react'

export const SearchContext= createContext({});

export default function SearchContextProvider({ children }) {
    const [searchDataInput, setSearchDataInput] = useState("");
    const [jobList, setJobList] = useState(null);

    function replaceInputValueSpaceToPlus() {
      return searchDataInput.replaceAll(" ", "+");
    }


    function getJobList() {
      const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${replaceInputValueSpaceToPlus()}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
               console.log(data)
        setJobList(data)
        });
    }



    return (
      <SearchContext.Provider value={{
        jobList, setJobList, searchDataInput, setSearchDataInput, getJobList
      }}>
        {children}
      </SearchContext.Provider>
    )
  }