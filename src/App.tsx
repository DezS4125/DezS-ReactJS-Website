import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Button from "./components/Button";

import "./App.css";
const App = () => {
  const [webTheme, setWebTheme] = useState("dark");
  const toggleWebTheme = () => {
    webTheme === "white" ? setWebTheme("dark") : setWebTheme("white");
  };
  return (
    <div id="website-root" data-bs-theme={webTheme}>
      <Router>
        <div id="nav-bar">
          <NavBar>
            <Button onClick={() => toggleWebTheme()}>ChangeTheme</Button>
          </NavBar>
        </div>
        <div id="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
