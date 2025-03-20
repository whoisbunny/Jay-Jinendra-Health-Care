import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openEditModal: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    // handle dark mode
    // handleDarkMode: (state, action) => {
    //   //   state.darkMode = action.payload;
    //   //   window.localStorage.setItem("darkMode", action.payload);
    // },
    handleModal: (state, action) => {
      state.openEditModal = action.payload;
    },
  },
});

export const { handleModal } = layoutSlice.actions;

export default layoutSlice.reducer;
