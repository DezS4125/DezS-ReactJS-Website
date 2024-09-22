import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
const App = () => {
  const [webTheme, setWebTheme] = useState("dark");
  const toggleWebTheme = () => {
    webTheme === "white" ? setWebTheme("dark") : setWebTheme("white");
  };
  return (
    <div data-bs-theme={webTheme}>
      <NavBar>
        <Button onClick={() => toggleWebTheme()}>ChangeTheme</Button>
      </NavBar>
    </div>
  );
};

export default App;
