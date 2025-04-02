import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./reducers/layout";
import authReducer from "./reducers/authReducer";
import generalReducer from "./reducers/generalReducer";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    auth: authReducer,
    general: generalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
