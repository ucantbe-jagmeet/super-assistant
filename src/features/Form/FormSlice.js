import { createSlice } from "@reduxjs/toolkit";
import { categoryList, itemsList, questionsList } from "../../../data";

const initialState = {
  questionsList: questionsList,
  categoryList: categoryList,
  itemsList: itemsList,
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

export const { increment, decrement } = formSlice.actions;
export default formSlice.reducer;
