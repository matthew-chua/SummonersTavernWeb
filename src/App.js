import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components:

import LandingPage from "./LandingPage";
import ResNavBar from "./Navbars/ResNavBar";
import Menu from "./Navbars/Menu";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Summoner's Tavern by 4QLabs</title>
        <meta
          name="description"
          content="Summoner's Tavern living in SOLANA Metaverse. 5000 Outworlders to be summoned soon..."
        />
        <meta
          name="keywords"
          content="Summoner's Tavern, Outworlders, Solana, NFT, 4QLabs"
        />
      </Helmet>
      <ResNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={menuOpen ? "AppOpen" : "App"}>
        <LandingPage setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      </div>
    </Router>
  );
}

export default App;
