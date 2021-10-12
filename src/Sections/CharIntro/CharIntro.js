import React from "react";

// Styles:
import classes from "./CharIntro.module.css";

function CharIntro() {
  return (
    <div className={classes.charIntroCont}>
      <h1 className={classes.title}>CHARACTER INTRODUCTION</h1>
      <div className={classes.mascotImgCont}>
        <img src="/Assets/mascot.png" alt="mascot-attributes-image" />
      </div>
    </div>
  );
}

export default CharIntro;
