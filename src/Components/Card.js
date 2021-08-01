import React from "react";
import { connect } from "react-redux";

function Card({ state }) {
  const calculateAvailabeEmployees = (state) => {
    const totalEmployee = state.totalEmployee;
    let sumOfEmployeeUsedInTask = 0;
    for (let i = 0; i < state.task.length; i++) {
      if (!state.task[i].isCompleated) {
        sumOfEmployeeUsedInTask =
          parseInt(sumOfEmployeeUsedInTask) + parseInt(state.task[i].employee);
      }
    }
    return totalEmployee - sumOfEmployeeUsedInTask;
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
            <p className="card-text">Total Task = 0</p>
            <p className="card-text">Task Compleated = 0</p>
            <p className="card-text">Task Not Compleated = 0</p>
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
