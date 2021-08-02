import React from "react";
import { connect } from "react-redux";
import calculateAvailabeEmployees from "../calculateAvailableEmployee";

function Card({ state }) {
  const calculateTotalTask = (state) => {
    const task = state.task;
    return task.length;
  };
  const calculateCompleatedTask = (state) => {
    const task = [];
    for (let i = 0; i < state.length; i++) {
      if (state[i].isCompleated) {
        task.push(state[i]);
      }
    }
    return task.length;
  };
  const calculateNonCompleatedTask = (state) => {
    const task = [];
    for (let i = 0; i < state.length; i++) {
      if (!state[i].isCompleated) {
        task.push(state[i]);
      }
    }
    return task.length;
  };
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-xl-6">
        <div className="card shadow">
          <div className="card-header">Employee Details</div>
          <div className="card-body">
            <h5 className="card-title">Track Employee Status</h5>
            <p className="card-text mt-3">
              Total Employees = {state.totalEmployee}
            </p>
            <p className="card-text">
              Avalilabe Employee = {calculateAvailabeEmployees(state)}
            </p>
            <p className="card-text">
              Total Task = {calculateTotalTask(state)}
            </p>
            <p className="card-text">
              Task Compleated = {calculateCompleatedTask(state.task)}
            </p>
            <p className="card-text">
              Task Not Compleated = {calculateNonCompleatedTask(state.task)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state };
};

const Cards = connect(mapStateToProps)(Card);

export default Cards;
