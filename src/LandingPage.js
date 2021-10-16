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
import { Helmet } from "react-helmet";

//animations
import { Fade } from "react-reveal";
import Mission from "./Sections/Mission";
import Vision from "./Sections/Vision";

// Custom Hook:
import useWindowDimensions from "./useWindowDimensions";

//css
import classes from "./LandingPage.module.css";

export default function LandingPage({ menuOpen, setMenuOpen }) {
  // const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    return () => {
      setMenuOpen(false);
    };
  }, []);

  // Get Dimensions of the Screen:
  const { height, width } = useWindowDimensions();
  return (
    <>
      <div>
        {width > 800 && <NavBar />}

        <Fade duration="2000">
          <Intro />
        </Fade>
        <Fade duration="2000">
          <Lore />
        </Fade>

        {/* <Mission /> */}
        <Fade duration="2000">
          <CharIntro />
        </Fade>
        <Fade duration="2000">
          <Vision />
          {/* <Attributes /> */}
        </Fade>
        <Fade duration="2000">
          <FAQ />
        </Fade>
        <Fade duration="2000">
          <Elders />
        </Fade>

        {/* <Socials /> */}
        <p className={classes.footer}>&#169; 2021 4Q Labs.</p>
      </div>
    </>
  );
}
