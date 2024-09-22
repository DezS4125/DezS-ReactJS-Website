import { useState } from "react";
import Button from "../components/Button";
import "../css/Home.css";
const Home = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div id="home-page-root">
      <div id="content">
        <h1 id="home-page-header">Welcome to my Home Page!</h1>
        <img
          src="src/assets/neofetch-placeholder.png"
          alt="A placeholder image"
          id="image"
        ></img>
        <Button id="click-button" onClick={handleClick}>
          Click me!
        </Button>
        <div id="count-text">Count is {count}</div>
      </div>
    </div>
  );
};

export default Home;
