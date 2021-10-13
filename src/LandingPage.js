import React from "react";
import CharIntro from "./Sections/CharIntro/CharIntro";
import Elders from "./Sections/Elders/EldersNew";
import Intro from "./Sections/Intro/Intro";
import Lore from "./Sections/Lore/Lore";
import Attributes from "./Sections/Attributes/Attributes";
import NavBar from "./NavBar";
import Socials from "./Sections/Socials";
import FAQ from "./Sections/FAQ/FAQ";

//animations
import { Fade } from "react-reveal";
import Mission from "./Sections/Mission";
import Vision from "./Sections/Vision";

//css

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <Fade bottom>
        <Intro />
        <Lore />
        <Mission/>
        <Vision/>
        <Attributes />
        <CharIntro />
        <FAQ />
        <Elders />
        <Socials />
      </Fade>
    </div>
  );
}
