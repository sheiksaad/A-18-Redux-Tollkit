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
      if (state.counter === 0) {
        state.counter = 0;
      } else {
        state.counter = --state.counter;
      }
    },
    resetCounter: (state, action) => {
      state.counter = 0;
      console.log("Reset Counter value");
    },
  },
});

const { actions, reducer } = counterSlice;

export const { addCounter, minusCounter, resetCounter } = actions;

export default reducer;
