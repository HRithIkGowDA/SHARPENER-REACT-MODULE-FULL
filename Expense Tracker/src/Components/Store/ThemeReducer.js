import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = { theme: null };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    switchTheme: (state) => {
      state.theme = "Expenses_Dark";
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;