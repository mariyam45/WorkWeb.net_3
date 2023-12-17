import React from "react";
import { useParams } from "react-router-dom";
import { jobData } from "../JobsData/JobsData";
import "./JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();

  const filterById = jobData.filter((jd) => jd.id == id);

  const handleAppliedJob = () => {
    const existAppliedJobs = JSON.parse(localStorage.getItem("appliedJobs"));
    if (existAppliedJobs !== null) {
      const filterIfExistAlready = existAppliedJobs.filter(
        (dt_job) => dt_job.id === id
      );
      if (filterIfExistAlready) {
        return alert("you already applied");
      }
      {
        const newAppliedJobsAre = [...filterById, ...existAppliedJobs];
        localStorage.setItem("appliedJobs", JSON.stringify(newAppliedJobsAre));
      }
    } else {
      localStorage.setItem("appliedJobs", JSON.stringify([...filterById]));
    }
  };
  return (
    <div className="overflow-hidden">
      <div className="title ">
        <img className="img1" src="../../../assets/images/bg1.png" alt="" />
        <h2 className=" ">Job Details </h2>

        <img className="img2" src="../../../assets/images/bg2.png" alt="" />
      </div>

      <div className="details_cont md:w-4/6 mx-auto flex md:mt-14 mt-8">
        {/* {jobData.filter((job) => job.id === id)} */}

        <div className="details_left w-4/6 mr-4">
          <p>
            <span>Job Description : </span>
            {filterById[0]?.job_description}{" "}
          </p>
          <p>
            <span>Job Responsibility : </span>
            {filterById[0]?.job_responsibility}
          </p>
          <p>
            <span className="block mb-3 mt-4">Educational Requirements : </span>{" "}
            {filterById[0]?.educational_requirements}
          </p>
          <p>
            <span className="block mb-3 mt-4">Experiences : </span>
            {filterById[0]?.experiences}
          </p>
        </div>
        <div className="details_right w-2/6">
          <div className="details_right_card mb-4 p-4">
            <p className="titles">Job Details</p>
            <hr />
            <div className="mb-1">
              <img src="../../../assets/icons/money.png" alt="" />
              <p>
                <span>Salary : </span> {filterById[0]?.salary}
              </p>
            </div>
            <div>
              <img src="../../../assets/icons/calendar.png" alt="" />

              <span>Job title : </span>
              <p>{filterById[0]?.job_title}</p>
            </div>

            <p className="titles mt-5">Contact Information</p>
            <hr />
            <div className="mb-1">
              <img src="../../../assets/icons/phone.png" alt="" />
              <p>
                <span>Phone : </span>
                {filterById[0]?.contact_information.phone}
              </p>
            </div>
            <div>
              <img src="../../../assets/icons/email.png" alt="" />
              <p>
                <span>Email : </span> {filterById[0]?.contact_information.email}
              </p>
            </div>
            <div className="">
              <img
                src="../../../assets/icons/location2.png"
                alt=""
                className="me-0"
              />

              <span>Address :</span>
              <p className="">{filterById[0]?.contact_information.address}</p>
            </div>
          </div>
          <button
            // disabled={activeApplyButton}
            className="btn btn-block"
            onClick={handleAppliedJob}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
