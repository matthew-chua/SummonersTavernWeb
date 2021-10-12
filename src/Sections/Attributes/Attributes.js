import React from "react";

//assets
import mascot from "../../Assets/mascot.png";

// Styles:
import classes from "./Attributes.module.css";

function Attributes() {
  return (
    <div className={classes.attributesCont} id="attributes">
      <h1 className={classes.title}>ATTRIBUTES</h1>
      
        <img src={mascot} alt="mascot-attributes-image" className={classes.image}/>
      
    </div>
  );
}

export default Attributes;
