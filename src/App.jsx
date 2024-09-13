import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <Header />
      <Button />
    </div>
  );
};

export default App;
