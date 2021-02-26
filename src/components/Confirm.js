import React from "react";

const Confirm = ({ values, nextStep, prevStep }) => {
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
        <h2>Please confirm your details</h2>
      </nav>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">First Name : {values.firstName}</li>
        <li className="list-group-item">Last Name :{values.lastName}</li>
        <li className="list-group-item">Email :{values.email}</li>
        <li className="list-group-item">Occupation :{values.occupation}</li>
        <li className="list-group-item">City :{values.city}</li>
        <li className="list-group-item">Bio :{values.bio}</li>
      </ul>
      <div className="d-flex flex-row justify-content-between mt-4">
        <button className="btn-secondary w-25 mt-4" onClick={previous}>
          Previous
        </button>
        <button className="btn-secondary w-25 mt-4" onClick={next}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirm;
