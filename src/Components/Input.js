import React from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
import calculateAvailabeEmployees from "../calculateAvailableEmployee";

function Inputs({ state, dispatch }) {
  let numberOfRequiredEmployee;
  let estimatedTime;
  let taskName;
  const addTask = () => {
    if (
      !isNaN(parseInt(numberOfRequiredEmployee.value)) &&
      !isNaN(parseInt(estimatedTime.value)) &&
      typeof taskName.value === "string" &&
      calculateAvailabeEmployees(state) -
        parseInt(numberOfRequiredEmployee.value) >=
        0
    ) {
      dispatch({
        type: "ADD_TASK",
        id: v4(),
        task: taskName.value,
        employee: numberOfRequiredEmployee.value,
        time: estimatedTime.value,
      });
    } else {
      dispatch({
        type: "DANGER_ALERT",
        id: v4(),
      });
    }
    numberOfRequiredEmployee.value = "";
    estimatedTime.value = "";
    taskName.value = "";
  };
  return (
    <>
      <div className="row justify-content-center">
        <p className="display-3 text-muted text-center my-5">
          Enter a new Task
        </p>
        <div className="col-xl-4 col-12 mb-5">
          <label>Name of task</label>
          <input
            type="text"
            className="w-100"
            id="amount"
            ref={(node) => (taskName = node)}
            placeholder="Name of task"
          />
        </div>
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
          <label>Estimated time(in hours)</label>
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

const mapStateToProps = (state) => {
  return { state };
};
const Input = connect(mapStateToProps)(Inputs);

export default Input;
