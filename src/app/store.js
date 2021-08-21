import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todosSlice";
import loginReducer from "../features/login/loginSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: loginReducer,
    users: userReducer,
  },
});
