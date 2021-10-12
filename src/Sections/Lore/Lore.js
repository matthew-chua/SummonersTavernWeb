import React from "react";

import classes from "./Lore.module.css";

function Lore() {
  return (
    <div className={classes.loreCont}>
      <h1 className={classes.title}>LORE</h1>
      <div className={classes.loreDetailsCont}>
        <div className={classes.imgCont}>
          <img className={classes.img} src="" alt="lore-background" />
        </div>
        <div className={classes.paraCont}>
          <span className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            posuere accumsan quam, vitae scelerisque ante porta nec. Nullam
            lacinia dapibus mauris id viverra. Donec sem tortor, sollicitudin
            luctus dignissim eget, imperdiet ut felis. Ut pellentesque congue
            felis at tristique. Aenean ultricies tincidunt quam, nec eleifend
            lectus elementum nec.
          </span>
          <span className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Lore;
