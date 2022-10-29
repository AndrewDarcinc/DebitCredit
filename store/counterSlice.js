import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value1: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value1 += 1;
    },
    decrement: (state) => {
      state.value1 -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value1 += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
