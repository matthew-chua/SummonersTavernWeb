import React from "react";

import classes from "./Lore.module.css";

//assets
import lore from "../../Assets/lore.png";

function Lore() {
  return (
    <div id="lore" className={classes.loreCont}>
      <h1 className={classes.title}>LORE</h1>

      <img className={classes.img} src={lore} alt="lore-background" />
    </div>
  );
}

export default Lore;
