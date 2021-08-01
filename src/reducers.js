import { combineReducers } from "redux";

function removeTask(state, id) {
  for (let i = 0; i < state.length; i++) {
    if (id === state.id) {
      state.splice(i, 1);
      break;
    }
  }
  return state;
}

function toggleStatus(state, id) {
  for (let i = 0; i < state.length; i++) {
    if (id === state.id) {
      state[i].isCompleated = !state[i].isCompleated;
      break;
    }
  }
  return state;
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
      return removeTask(state, action.id);
    case "TOGGLE_STATUS":
      return toggleStatus(state, action.id);
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

export const employeeTracker = combineReducers({ task, totalEmployee });
