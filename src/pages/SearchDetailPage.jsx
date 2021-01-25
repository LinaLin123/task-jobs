import React, {useState, useEffect } from 'react'
import JobItemDetail from "../components/JobItemDetail"


export default function SearchDetailPage(props) {
const [job, setJob ] = useState(null)

useEffect(() => {
    fetchJob()
        // eslint-disable-next-line

},[])

const fetchJob = () => {
    const id = props.match.params.id
    console.log(id);
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => setJob(data));
}
    return (
        <div>
      {job && <JobItemDetail job={job} />}
    
            </div>
    )
}
