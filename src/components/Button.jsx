import React from "react";
import { addCounter, minusCounter } from "../store/slices/counterSlice";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();
  const handleAction = () => {
    dispatch(addCounter());
  };

  const handleAction1 = () => {
    dispatch(minusCounter());
  };
  return (
    <>
      <button onClick={handleAction}>Add</button>
      <button onClick={handleAction1}>Del</button>
    </>
  );
};

export default Button;
