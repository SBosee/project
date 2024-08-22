import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    todos: [],
  },
  reducers: {
    createTodo: (state, action) => {
      state.todos.push({
        todoIndex: action.payload.todoIndex,
        title: action.payload.title,
        isPending: action.payload.isPending,
      });
    },
    // editTodo: (state, action) => {
    //   const todo = state.todos.find(
    //     (todo) => todo.todoIndex === action.payload.todoIndex
    //   );
    //   if (todo) {
    //     todo.title = action.payload.title;
    //     todo.isPending = action.payload.isPending;
    //   }
    // },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.filter(
        (todo) => todo.todoIndex !== action.payload
      );
    },
    checkTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.todoIndex === action.payload.todoIndex
      );
      if (todo) {
        todo.isPending = action.payload.isPending;
      }
    },
  },
});

export const { createTodo, deleteTodo, checkTodo } = todoSlice.actions;
export default todoSlice.reducer;
