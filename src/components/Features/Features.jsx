import React from "react";
import Job from "../Job/Job";
import "./Features.css";
const Features = ({ featureJob }) => {
  return (
    <div className="md:w-4/6 md:mt-14 mt-8  mb-4 mx-auto text-center feat">
      <h1>Featured Jobs </h1>
      {/* <h2>{featureJob.length}</h2> */}
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="features mt-4">
        {featureJob.map((job) => (
          <Job key={job.id} job={job}>
            {/* <JobDetails job={job}></JobDetails> */}
          </Job>
        ))}
      </div>
    </div>
  );
};
export default Features;
