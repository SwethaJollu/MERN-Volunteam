import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../components/PageHeader";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "Enter Your Resume URL",
      inputPlaceholder: "Enter the URL",
      inputValidator: (value) => {
        if (!value) {
          return "URL is required";
        }
      },
    });

    if (url) {
      // Show applied successfully message
      Swal.fire({
        icon: "success",
        title: " Application Submitted Successfully",
      });
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Job Details"} path={"single job"} />
      <br />
      <br />
      <h2 className="font-semibold">Job ID: {id}</h2>
      <br />
      <h2 className="jobTitle" style={{ fontSize: "40px" }}>
        <b> Job Role : {job.jobTitle}</b>
      </h2>

      <br />

      <button className="bg-blue px-8 py-2 text-white" onClick={handleApply}>
        <b>Apply Now</b>
      </button>
      <br />
      <br />
      <h2>
        <b>Job Description:</b>
      </h2>
      <br />
      <p>
        We are looking for an outstanding canditate to be responsible for the
        coding, innovative design and layout of our website. These include
        responsibilities include building our website from concept all the way
        to completion from the bottom up, fashioning everything from the home
        page to site layout and function.
      </p>
      <br />
      <h2>
        <b>Responsibilities:</b>
      </h2>
      <br />
      <p>
        1 . Write well designed, testable, efficient code by using best software
        development practices.
      </p>
      <br />
      <p>
        2 . Stay plugged into emerging technologies/industry trends and apply
        them into operations and activities.
      </p>
      <br />
      <p>3 . Integrate data from various back-end services and databases.</p>
      <br />
      <p>
        4 . Gather and refine specifications and requirements based on technical
        needs
      </p>
      <br />
      <p>5 . Cooperate with web designers to match visual design intent</p>
      <br />
      <p>6 . Create and maintain software documentation</p>
    </div>
  );
};

export default JobDetails;
