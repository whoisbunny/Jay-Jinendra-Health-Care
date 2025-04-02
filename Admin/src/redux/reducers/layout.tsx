import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  language: string;
  openEditModal: boolean;
  openGeneralModal: boolean;
}


const initialState: LanguageState = {
  language: "en",
  openEditModal: false,
  openGeneralModal: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    handleModal: (state, action) => {
      state.openEditModal = action.payload;
    },
    handleGeneralModal: (state, action) => {
      state.openGeneralModal = action.payload;
    }
  },
});

export const { setLanguage ,handleModal,handleGeneralModal} = layoutSlice.actions;
export default layoutSlice.reducer;
