import React, { useState, useEffect } from "react";
import CharIntro from "./Sections/CharIntro/CharIntro";
import Elders from "./Sections/Elders/EldersNew";
import Intro from "./Sections/Intro/Intro";
import Lore from "./Sections/Lore/Lore";
import Attributes from "./Sections/Attributes/Attributes";
import NavBar from "./NavBar";
import Socials from "./Sections/Socials";
import FAQ from "./Sections/FAQ/FAQ";
import ResNavBar from "./Navbars/ResNavBar";
import Menu from "./Navbars/Menu";

//animations
import { Fade } from "react-reveal";
import Mission from "./Sections/Mission";
import Vision from "./Sections/Vision";

//css

// Custom Hook:
import useWindowDimensions from "./useWindowDimensions";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    return () => {
      setMenuOpen(false);
    };
  }, []);

  // Get Dimensions of the Screen:
  const { height, width } = useWindowDimensions();
  return (
    <div>
      {width > 800 && <NavBar />}
      {width <= 800 && (
        <>
          <ResNavBar menuOpen={menuOpen} setMenuOopen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />{" "}
        </>
      )}
      <Fade bottom>
        <Intro />
        <Lore />
        <Mission />
        <Vision />
        <Attributes />
        <CharIntro />
        <FAQ />
        <Elders />
        <Socials />
      </Fade>
    </div>
  );
}
