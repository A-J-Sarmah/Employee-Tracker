import React from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";

function Inputs({ dispatch }) {
  let numberOfRequiredEmployee;
  let estimatedTime;
  const addTask = () => {
    if (
      !isNaN(parseInt(numberOfRequiredEmployee.value)) &&
      !isNaN(parseInt(estimatedTime.value))
    ) {
      dispatch({
        type: "ADD_TASK",
        id: v4(),
        employee: numberOfRequiredEmployee.value,
        time: estimatedTime.value,
      });
    }
    numberOfRequiredEmployee.value = "";
    estimatedTime.value = "";
  };
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
            ref={(node) => (numberOfRequiredEmployee = node)}
            placeholder="Enter number of Employees required"
          />
        </div>
        <div className="col-xl-4 col-12 mb-5">
          <label>Estimated time</label>
          <input
            type="text"
            className="w-100"
            id="to"
            ref={(node) => (estimatedTime = node)}
            placeholder="Estimated Time"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-4 col-12 mb-5 text-center">
          <button className="btn btn-dark" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}

const Input = connect()(Inputs);

export default Input;
