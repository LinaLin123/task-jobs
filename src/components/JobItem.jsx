import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function JobItem({ job }) {
  return (
    <Link
      to={`id=${job.id}`}
      style={{ textDecoration: "none", color: "#696868" }}
    >
      <div>
        <div className="item">
          <img className="imgLogo" src={job.company_logo} alt={job.company} />
          <h2 className="title">{job.title}</h2>
        </div>
      </div>
    </Link>
  );
}
