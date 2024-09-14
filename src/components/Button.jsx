import React from "react";
import {
  addCounter,
  minusCounter,
  resetCounter,
} from "../store/slices/counterSlice";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();

  const handleAction = () => {
    dispatch(addCounter());
  };

  const handleAction1 = () => {
    dispatch(minusCounter());
  };

  const handleAction2 = () => {
    dispatch(resetCounter());
  };

  return (
    <div className="flex space-x-4 mt-4">
      <button
        onClick={handleAction}
        className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition duration-300"
      >
        Add
      </button>
      <button
        onClick={handleAction1}
        className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-red-600 transition duration-300"
      >
        Delete
      </button>

      <button
        onClick={handleAction2}
        className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-yellow-600 transition duration-300"
      >
        Reset
      </button>
    </div>
  );
};

export default Button;
