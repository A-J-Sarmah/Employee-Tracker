import { combineReducers } from "redux";

function getIndex(state, id) {
  for (let i = 0; i < state.length; i++) {
    if (id === state[i].id) {
      return i;
    }
  }
}

const task = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: action.id,
          employee: action.employee,
          time: action.time,
          isCompleated: false,
        },
      ];
    case "REMOVE_TASK":
      const indexRemove = getIndex(state, action.id);
      state.splice(indexRemove, 1);
      return [...state];
    case "TOGGLE_STATUS":
      const index = getIndex(state, action.id);
      state[index].isCompleated = !state[index].isCompleated;
      return [...state];
    default:
      return state;
  }
};

const totalEmployee = (state = "20000", action) => {
  switch (action.type) {
    case "CHANGE_TOTAL_EMPLOYEE":
      if (!isNaN(parseInt(action.value))) {
        return action.value;
      }
    default:
      return state;
  }
};

const alert = (state = [], action) => {
  switch (action.type) {
    case "DANGER_ALERT":
      return [
        ...state,
        {
          message:
            "Some error occured number of available employee less than zero or entered wrong value",
          isCompleated: false,
          id: action.id,
        },
      ];
    case "COMPLEATED":
      const index = getIndex(state, action.id);
      if (state[index]) {
        state.splice(index, 1);
      }
      return [state];
    default:
      return state;
  }
};
export const employeeTracker = combineReducers({ task, totalEmployee, alert });
