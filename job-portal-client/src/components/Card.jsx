import { Link } from "react-router-dom";
import React from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";

const Card = ({ data }) => {
  const {
    _id,
    companyName,
    companyLogo,
    jobTitle,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;

  return (
    <section className="card">
      <Link
        to={`/job/${_id}`}
        className="text-primary flex gap-4 flex-col sm:flex-row items-start"
      >
        <img src={companyLogo} alt="" />
        <div>
          <h4 className="text-primary mb-1 font-bold">{companyName}</h4>
          <h3 className="text-primary text-lg font-bold mb-2">{jobTitle}</h3>
          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="text-primary flex items-center gap-2">
              <FiMapPin />
              {jobLocation}
            </span>
            <span className="text-primary flex items-center gap-2">
              <FiClock />
              {employmentType}
            </span>
            <span className="text-primary flex items-center gap-2">
              <FiDollarSign />
              {minPrice}-{maxPrice}k
            </span>
            <span className="text-primary flex items-center gap-2">
              <FiCalendar />
              {postingDate}
            </span>
          </div>
          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
