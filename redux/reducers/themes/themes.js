// import createSlice
import { createSlice } from "@reduxjs/toolkit";

// Initial value (مقدار اولیه)
const init = {
  theme: {
    darkMode: true,
  },
};

const themesSlice = createSlice({
  name: "themesSlice",
  initialState: init,
  reducers: {
    changeTheme: function (state, action) {
      state.theme.darkMode === true
        ? state.theme.darkMode = false
        : state.theme.darkMode = true
    },
  },
});

export default themesSlice.reducer;
export const { changeTheme } = themesSlice.actions;
