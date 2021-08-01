import React from "react";

function Input() {
  return (
    <>
      <div className="row justify-content-center">
        <p className="display-3 text-muted text-center my-5">
          Enter a new Task
        </p>
        <div className="col-xl-4 col-12 mb-5">
          <label>Number of Employees reuired</label>
          <input
            type="text"
            className="w-100"
            id="amount"
            placeholder="Enter number of Employees required"
          />
        </div>
        <div className="col-xl-4 col-12 mb-5">
          <label>Estimated time</label>
          <input
            type="text"
            className="w-100"
            id="to"
            placeholder="Estimated Time"
          />
        </div>
      </div>
    </>
  );
}

export default Input;
