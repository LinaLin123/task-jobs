import React, { createContext, useState } from "react";

export const SearchContext = createContext({});

export default function SearchContextProvider({ children }) {
  const [searchDataInput, setSearchDataInput] = useState("");
  const [jobList, setJobList] = useState(null);
  const [alreadySearchResults] = useState(new Map()); 

  function replaceInputValueSpaceToPlus() {
    return searchDataInput.replace(/ /g, "+");
  }

  function getJobList() {
    const formattedSearchInput = replaceInputValueSpaceToPlus();
    if (alreadySearchResults.has(formattedSearchInput)) {
      setJobList(alreadySearchResults.get(formattedSearchInput))
    } else {
      const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${formattedSearchInput}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setJobList(data);
          alreadySearchResults.set(formattedSearchInput, data);
        });
    }
    
  }

  // console.log("alreadysearchresults", alreadySearchResults);
  // console.log(searchDataInput);
  // console.log(jobList);

  return (
    <SearchContext.Provider
      value={{
        jobList,
        setJobList,
        searchDataInput,
        setSearchDataInput,
        getJobList,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
