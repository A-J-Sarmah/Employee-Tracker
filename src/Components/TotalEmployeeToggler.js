import React from "react";

function Values() {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-xl-6 col-12 mb-5 text-center">
        <label>Total Employee</label>
        <input type="text" class="w-100 mt-3" value="20000" />
        <button className="btn btn-dark mt-3">Change Data</button>
      </div>
    </div>
  );
}

export default Values;
