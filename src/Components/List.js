import React from "react";
import { connect } from "react-redux";

let List = ({ state, dispatch }) => {
  function toggleStatus(id) {
    dispatch({ type: "TOGGLE_STATUS", id });
  }
  function removeTask(id) {
    dispatch({ type: "REMOVE_TASK", id });
  }
  return (
    <div className="row mb-5 justify-content-center">
      {state.task.map((element) => {
        return (
          <div
            id={element.id}
            key={element.id}
            className={`
              col-12
              shadow
              d-flex
              align-items-center
              justify-content-end
              mb-2
              ${element.isCompleated ? "text-decoration-line-through" : ""}
            `}
          >
            <span className="me-auto">
              {element.employee} employee working on {element.task} for{" "}
              {element.time} hours.
            </span>
            <span>
              <i
                className="fa fa-check me-2"
                onClick={() => {
                  toggleStatus(element.id);
                }}
              ></i>
              <i
                className="fa fa-times"
                onClick={() => {
                  removeTask(element.id);
                }}
              ></i>
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
