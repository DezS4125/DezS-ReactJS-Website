import React, { useState } from "react";
import Button from "../components/Button";
import "../css/Home.css";
const Home = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div id="home-page-root">
      <h1 id="home-page-header">Homepage</h1>
      <Button id="click-button" onClick={handleClick}>
        Click me!
      </Button>
      <div id="count-text">{count}</div>
    </div>
  );
};

export default Home;
