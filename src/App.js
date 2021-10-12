import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components:


import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <LandingPage/>
      </div>
    </Router>
  );
}

export default App;
