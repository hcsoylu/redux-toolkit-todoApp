import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return (state = state.filter((t) => t.id !== action.payload.id));
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload.id);
      todo.isDone = !todo.isDone;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
