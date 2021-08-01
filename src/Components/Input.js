import React from "react";

function Input() {
  return (
    <>
      <div className="row justify-content-center">
        <p className="display-3 text-muted text-center my-5">
          Enter a new Task
        </p>
        <div className="col-xl-4 col-12 mb-5">
          <label>Number of Employees required</label>
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
      <div className="row justify-content-center">
        <div className="col-xl-4 col-12 mb-5 text-center">
          <button className="btn btn-dark">Add Task</button>
        </div>
      </div>
    </>
  );
}

export default Input;
