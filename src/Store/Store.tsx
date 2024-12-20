import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/Slices/userSlice/index";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
