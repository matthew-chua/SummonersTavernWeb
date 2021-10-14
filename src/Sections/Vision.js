import React from "react";

//assets
import timeline from "../Assets/roadmap.png";

//css
import classes from "./Vision.module.css";

export default function Vision() {
  return (
    <div className={classes.root} id="roadmap">
      <h1 className={classes.title}>ROADMAP</h1>
      <img src={timeline} className={classes.pic} />
    </div>
  );
}
