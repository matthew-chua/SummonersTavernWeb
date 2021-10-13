import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components:

import LandingPage from "./LandingPage";
import ResNavBar from "./Navbars/ResNavBar";
import Menu from "./Navbars/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
    return () => {
      setMenuOpen(false);
    };
  }, []);
  return (
    <Router>
      <ResNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={menuOpen ? "AppOpen" : "App"}>
        <LandingPage setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      </div>
    </Router>
  );
}

export default App;
