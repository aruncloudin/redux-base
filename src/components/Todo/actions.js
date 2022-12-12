import * as actions from "../../reducers/actionTypes";

export const fetchInput = (data) => ({
  type: actions.INPUT_TODO,
  data,
});

export const addTodo = () => ({
  type: actions.ADD_TODO,
});

export const editTodo = () => ({
  type: actions.EDIT_TODO,
});

let data = {
  name: "arun",
  list: ["sd", "teee"],
};
