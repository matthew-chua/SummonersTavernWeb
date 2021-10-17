import React, { useState } from "react";

import classes from "./Lore.module.css";

//assets
import lore from "../../Assets/lore.png";

function Lore() {
  const [nextPage, setNextPage] = useState(0);

  const togglePageHandler = () => {
    setNextPage((prevState) => {
      console.log("nextPage:", nextPage);
      return prevState === 0 ? (prevState === 1 ? 2 : 1) : 2;
    });
  };

  const previousPageHandler = () => {
    setNextPage((prevState) => {
      console.log("nextPage:", nextPage);
      return prevState === 2 ? (prevState === 1 ? 0 : 1) : 0;
    });
  };
  console.log(nextPage);
  return (
    <div id="lore" className={classes.loreCont}>
      <h1 className={classes.title}>LORE</h1>

      <div className={classes.loreImgCont}>
        <img className={classes.imgOff} src={lore} alt="lore-background" />
        <img
          className={`${classes.img0} ${nextPage === 0 && classes.imgOn}`}
          src={lore}
          alt="lore-background"
        />
        <img
          className={`${classes.img} ${nextPage === 1 && classes.imgOn}`}
          src={lore}
          alt="lore-background"
        />
        <img
          className={`${classes.img2} ${nextPage === 2 && classes.imgOn}`}
          src={lore}
          alt="lore-background"
        />
        {/* <img
          className={`${classes.img2} ${nextPage === 2 && classes.imgOn}`}
          src={lore}
          alt="lore-background"
        /> */}
      </div>
      <div className={classes.loreButGroup}>
        <button onClick={previousPageHandler} type="button">
          previous
        </button>
        <button onClick={togglePageHandler} type="button">
          next
        </button>
      </div>
    </div>
  );
}

export default Lore;
