import React from "react";

import classes from "./ResNavBar.module.css";

import STLogo from "../Assets/logoMobile.png";

import useWindowDimensions from "../useWindowDimensions";

function ResNavBar({ menuOpen, setMenuOpen }) {
  const { height, width } = useWindowDimensions();
  const menuOnClickHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        {/* <a className={classes.link} href="Home"> */}
        {width < 800 && (
          <img
            className={classes.stLogo}
            onClick={() => window.scroll(0, 0)}
            src={STLogo}
            alt="ST-Logo"
          />
        )}
        {/* </a> */}
      </div>
      <div className={classes.rightHam} onClick={menuOnClickHandler}>
        <span
          className={`${classes.menuGlobal} ${
            menuOpen ? classes.menuTopClick : classes.menuTop
          }`}
        ></span>
        <span
          className={`${classes.menuGlobal} ${
            menuOpen ? classes.menuMiddleClick : classes.menuMiddle
          }`}
        ></span>
        <span
          className={`${classes.menuGlobal} ${
            menuOpen ? classes.menuBottomClick : classes.menuBottom
          }`}
        ></span>
      </div>
    </div>
  );
}

export default ResNavBar;
