import { createSlice } from "@reduxjs/toolkit";

const init = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todosSlice",
  initialState: init,
  reducers: {
    addItem: function (state, action) {
      console.log(action.payload.todo);
      state.todos.push({
        id: Date.now(),
        text: action.payload.todo,
        isDone: false,
      });
    },
    deleteAllItems: function (state, action) {
      state.todos = [];
    },

    changeDone: function (state, action) {
      let temp = state.todos;
      temp = temp.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
      state.todos = temp;
    },
  },
});

export default todosSlice.reducer;
export const { addItem, deleteAllItems, changeDone } = todosSlice.actions;
