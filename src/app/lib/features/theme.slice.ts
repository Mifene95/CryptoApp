import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  value: boolean;
}

const initialState: ThemeState = {
  value: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
