import React from "react";

const FormPersonnelDetails = ({ values, nextStep, prevStep, handleChange }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div className="container w-25 mt-5 border border-info p-4">
      <nav className="navbar bg-info d-flex justify-content-center">
        <h2>User personnel details</h2>
      </nav>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between mt-4 align-items-center">
          <label htmlFor="Occupation" className="form-label mt-2">
            Occupation
          </label>
          <input
            type="text"
            name="occupation"
            value={values.occupation}
            className="form-control ml-2 w-75"
            placeholder="Occupation"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-row justify-content-between mt-4 align-items-center">
          <label htmlFor="City" className="form-label mt-2">
            City
          </label>
          <input
            type="text"
            name="city"
            value={values.city}
            className="form-control ml-2 w-75"
            placeholder="City"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-row justify-content-between mt-4 align-items-center">
          <label htmlFor="Job" className="form-label mt-2">
            Job
          </label>
          <input
            type="text"
            name="job"
            value={values.job}
            className="form-control ml-2 w-75"
            placeholder="Job"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-row justify-content-between mt-4 align-items-center">
          <label htmlFor="Bio" className="form-label mt-2">
            Bio
          </label>
          <input
            type="text"
            name="bio"
            value={values.bio}
            className="form-control ml-2 w-75"
            placeholder="Bio"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-row justify-content-between mt-4">
          <button className="btn-secondary w-25 mt-4" onClick={previous}>
            Previous
          </button>
          <button className="btn-secondary w-25 mt-4" onClick={next}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPersonnelDetails;
