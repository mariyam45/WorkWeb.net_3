import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loc_icon from "../../../assets/icons/Location2.png";
import sal_icon from "../../../assets/icons/money.png";
import "./Job.css";

const Job = ({ job }) => {
  // const { jobD } = job;
  const {
    id,
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  // console.log(jobD);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="job">
      <img src={logo} alt="" />
      <h2>{job_title}</h2>
      <p>{company_name}</p>
      <div className="type_time flex">
        <span>{job_type}</span>
        <span>{remote_or_onsite}</span>
      </div>

      <div className="location_salary flex mt-3">
        <div className="location flex me-4">
          <img src={loc_icon} alt="" />
          <p>{location}</p>
        </div>
        <div className="salary flex">
          <img src={sal_icon} alt="" />
          <p>{salary}</p>
        </div>
      </div>
      {/* <Link to={`/details/${id}`}> */}
      <Link to={`/details/${id}`}>
        <button className="btn job_dtls_btn px-3 ">View Details</button>
      </Link>
    </div>
  );
};

export default Job;
