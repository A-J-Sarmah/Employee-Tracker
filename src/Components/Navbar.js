import React from "react";
import { connect } from "react-redux";

let Navbar = ({ state, dispatch }) => {
  const killAlert = () => {
    dispatch({ type: "COMPLEATED" });
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
          setTimeout(killAlert, 3000);
          return (
            <div
              className="alert alert-danger"
              role="alert"
              key={element.id}
              onClick={() => {
                killAlert(element.id);
              }}
            >
              Some error occured number of available employee less than zero or
              entered wrong value.
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
