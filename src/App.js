import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components:

import LandingPage from "./LandingPage";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Router>
      <div className="App">
        <LandingPage />
      </div>
    </Router>
  );
}

export default App;
