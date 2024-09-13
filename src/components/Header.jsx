import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { counter } = useSelector((state) => state.counterReducer);

  return (
    <div className="text-center my-6">
      <h1 className="text-4xl font-bold text-blue-600">Counter App</h1>
      <p className="text-2xl mt-2 text-gray-700">Counter: {counter}</p>
    </div>
  );
};

export default Header;
