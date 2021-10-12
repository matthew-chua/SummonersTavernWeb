import React from "react";

// Styles:
import classes from "./Attributes.module.css";

function Attributes() {
  return (
    <div className={classes.attributesCont}>
      <h1 className={classes.title}>ATTRIBUTES</h1>
      <div className={classes.mascotImgCont}>
        <img src="/Assets/mascot.png" alt="mascot-attributes-image" />
      </div>
    </div>
  );
}

export default Attributes;
