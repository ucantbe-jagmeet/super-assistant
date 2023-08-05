import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/Form/FormSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
