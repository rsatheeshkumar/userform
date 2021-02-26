import React from "react";

const Success = () => {
  return (
    <div className="container w-25 mt-5 border border-info p-4">
      <nav className="navbar bg-info d-flex justify-content-center mt-2">
        <h2>Submitted successfully</h2>
      </nav>
      <div className="m-4">
        <h3>Thank You For Your Submission!</h3>
        <p>You will get an email with further instructions.</p>
      </div>
    </div>
  );
};

export default Success;
