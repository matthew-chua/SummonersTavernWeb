import React from "react";

//assets
import timeline from "../Assets/roadmap.png";
import Timeline from "./Timeline";

//css
import classes from "./Vision.module.css";

export default function Vision() {
  return (
    <div className={classes.root} id="roadmap">
      <h1 className={classes.title}>Roadmap</h1>
      <Timeline/>
    </div>
  );
}
