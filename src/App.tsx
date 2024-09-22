import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
const App = () => {
  const [webTheme, setWebTheme] = useState("dark");
  const toggleWebTheme = () => {
    webTheme === "white" ? setWebTheme("dark") : setWebTheme("white");
  };
  return (
    <Router>
      <div data-bs-theme={webTheme}>
        <NavBar>
          <Button onClick={() => toggleWebTheme()}>ChangeTheme</Button>
        </NavBar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
