import React from "react";
import { connect } from "react-redux";

let List = ({ state }) => {
  return (
    <div className="row mb-5 justify-content-center">
      {state.task.map((element) => {
        return (
          <div
            id={element.id}
            key={element.id}
            className="
              col-12
              shadow
              d-flex
              align-items-center
              justify-content-end
              mb-2
            "
          >
            <span className="me-auto">
              {element.employee} employee ({element.time} hours)
            </span>
            <span>
              <i className="fa fa-check me-2"></i>
              <i className="fa fa-times"></i>
            </span>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};
List = connect(mapStateToProps)(List);

export default List;
