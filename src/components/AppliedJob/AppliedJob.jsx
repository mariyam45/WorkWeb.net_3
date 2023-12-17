import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AppliedJob = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getStoreData = JSON.parse(localStorage.getItem("appliedJobs"));
    if (getStoreData !== null) {
      setData(getStoreData);
    } else {
      setData([]);
    }
  }, []);
  return (
    <div className="h-screen">
      <div className="title">
        <img className="img1" src="../../../assets/images/bg1.png" alt="" />
        <h2 className=" ">Applied Jobs </h2>
        <img className="img2" src="../../../assets/images/bg2.png" alt="" />
      </div>
      <div className="max-w-5xl mx-auto mt-10">
        <div className="grid grid-cols-1 gap-3">
          {data.length < 0 ? (
            "No data found"
          ) : (
            <>
              {data.map((dt) => (
                <div
                  key={dt.id}
                  className="flex items-center p-4 rounded-md border border-purple-400"
                >
                  <div className="bg-slate-100 h-[200px] w-[200px] flex items-center justify-center rounded-md p-4">
                    <img
                      className="object-contain"
                      src={dt.logo}
                      alt={dt.job_title}
                      title={dt.job_title}
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="ml-10">
                      <h2>{dt.job_title}</h2>
                      <p>{dt.company_name}</p>
                      <div className="mt-3 space-x-3">
                        {dt.job_type && (
                          <button className="btn btn-outline btn-info">
                            {dt.job_type}
                          </button>
                        )}
                        {dt.remote_or_onsite && (
                          <button className="btn btn-outline btn-info">
                            {dt.remote_or_onsite}
                          </button>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 mt-5">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="0.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-map-pin"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>

                          <p>{dt.location}</p>
                        </div>
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="0.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-circle-dollar-sign"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                            <path d="M12 18V6" />
                          </svg>

                          <p>{dt.salary}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-success">
                        <Link to={`/details/${dt.id}`}>View Details</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
