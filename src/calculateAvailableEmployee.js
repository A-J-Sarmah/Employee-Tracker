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
export default calculateAvailabeEmployees;
