import React from "react";
import { connect } from "react-redux";

let Navbar = ({ state, dispatch }) => {
  const killAlert = (id) => {
    dispatch({ type: "COMPLEATED", id: id });
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <p className="navbar-brand my-0">Employee Tracker</p>
        </div>
      </nav>
      {state.alert.map((element) => {
        if (element.isCompleated === false) {
          return (
            <div
              class="alert alert-danger"
              role="alert"
              onClick={() => {
                killAlert(element.id);
              }}
            >
              {element.message}
              {setTimeout(() => {
                killAlert(element.id);
              }, 3000)}
            </div>
          );
        }
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

Navbar = connect(mapStateToProps)(Navbar);
export default Navbar;
