import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state, action) => {
      state.counter = ++state.counter;
      console.log("Add Counter value");
    },
    minusCounter: (state, action) => {
      state.counter = --state.counter;
    },
  },
});

const { actions, reducer } = counterSlice;

export const { addCounter, minusCounter } = actions;

export default reducer;
