import * as actions from "./actionTypes";

const initialState = {
  input: {
    id: 0,
    name: "",
    isCompleted: false,
  },
  list: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: "Todo test " + (i + 1),
    isCompleted: false,
  })),
};

export const getTodo = (state) => state.todo;

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        input: { ...initialState.input },
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            name: state.input.name,
            isCompleted: false,
          },
        ],
      };
    case actions.EDIT_TODO:
      return {
        input: { ...initialState.input },
        list: state.list.map((d) =>
          d.id === state.input.id ? state.input : d
        ),
      };
    case actions.INPUT_TODO:
      return {
        ...state,
        input: { ...state.input, ...action.payload },
      };
    default:
      return { ...state };
  }
}
