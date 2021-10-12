import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components:
import Intro from "./Sections/Intro/Intro";
import Lore from "./Sections/Lore/Lore";
import Attributes from "./Sections/Attributes/Attributes";
import CharIntro from "./Sections/CharIntro/CharIntro";
import Elders from "./Sections/Elders/Elders";

function App() {
  return (
    <Router>
      <div className="App">
        <Intro />
        <Lore />
        <Attributes />
        <CharIntro />
        <Elders />
      </div>
    </Router>
  );
}

export default App;
