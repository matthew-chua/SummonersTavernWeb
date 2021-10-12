import React from "react";
// import CharIntro from "./Sections/CharIntro/CharIntro";
import Elders from "./Sections/Elders/EldersNew";
import Intro from "./Sections/Intro/Intro";
import Lore from "./Sections/Lore/Lore";
import Attributes from "./Sections/Attributes/Attributes";

export default function LandingPage() {
  return (
    <div>
      <Intro />
      <Lore />
      <Attributes />
      {/* <CharIntro /> */}
      <Elders />
    </div>
  );
}
