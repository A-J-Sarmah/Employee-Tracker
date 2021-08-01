import React from "react";
import { connect } from "react-redux";

function TotalEmployeeToggler({ dispatch }) {
  let value;
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-xl-6 col-12 mb-5 text-center">
        <label>Total Employee</label>
        <input
          type="text"
          className="w-100 mt-3"
          ref={(node) => (value = node)}
        />
        <button
          className="btn btn-dark mt-3"
          onClick={() => {
            dispatch({
              type: "CHANGE_TOTAL_EMPLOYEE",
              value: value.value,
            });
            value.value = "";
          }}
        >
          Change Data
        </button>
      </div>
    </div>
  );
}

export default connect()(TotalEmployeeToggler);
