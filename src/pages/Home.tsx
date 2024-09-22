import React, { useState } from "react";
import Button from "../components/Button";

const Home = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Homepage</h1>
      <Button onClick={handleClick}>Click me!</Button>
      {count}
    </>
  );
};

export default Home;
