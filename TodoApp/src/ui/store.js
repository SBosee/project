import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./features/todo-slice";

const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
  },
});

export default store;
