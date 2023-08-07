import { createSlice } from "@reduxjs/toolkit";
import { categoryList, questionsList } from "../../../data";

const initialState = {
  questionsList: questionsList,
  categoryList: categoryList,
  storeListData: [
    {
      id: new Date().getTime(),
      item: "ans 1",
      categoryList,
    },
    {
      id: new Date().getTime(),
      item: "ans 2",
      categoryList,
    },
  ],
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
