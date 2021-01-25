import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

export default function JobItem({data}) {
    return (
        <Link
          to={`id=${data.id}`}
          style={{ textDecoration: "none", color: "#777575" }}
        >
          <div>
              <div className="item">
            <img className="imgLogo" src={data.company_logo} alt="Company Logo" />
            <h2 className="title">{data.title}</h2>
            </div>
          </div>
        </Link>
      );
    }
