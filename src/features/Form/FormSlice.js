import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
console.log(formSlice);

export const { increment, decrement } = formSlice.actions;
export default formSlice.reducer;
