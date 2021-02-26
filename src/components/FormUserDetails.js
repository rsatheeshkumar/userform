import React from "react";

const FormUserDetails = ({ values, nextStep, handleChange }) => {
  console.log(values);
  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    nextStep();
  };
  return (
    <div className="container w-25 mt-5 border border-info p-4">
      <nav className="navbar bg-info d-flex justify-content-center">
        <h2>User details</h2>
      </nav>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between mt-4 align-items-center">
          <label htmlFor="FirstName" className="form-label mt-2">
            FirstName
          </label>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            className="form-control ml-2 w-75"
            placeholder="FirstName"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-row justify-content-between mt-4 align-items-center">
          <label htmlFor="LastName" className="form-label mt-2">
            LastName
          </label>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            className="form-control ml-2 w-75"
            placeholder="LastName"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-row justify-content-between mt-4 align-items-center">
          <label htmlFor="Email" className="form-label mt-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            className="form-control ml-2 w-75"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <button
          className="btn-secondary w-25 mt-4 align-items-end"
          onClick={handleClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default FormUserDetails;
