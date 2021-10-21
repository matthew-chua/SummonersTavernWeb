import React, { useState } from "react";

import classes from "./Lore.module.css";

//assets
// import lore from "../../Assets/lore.png";
import lorePrologue from "../../Assets/LorePrologue.png";
import loreChapter1 from "../../Assets/LoreChapter1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

// Custom Hook:
import useWindowDimensions from "../../useWindowDimensions";

function Lore() {
  const [nextPage, setNextPage] = useState(0);

  const { height, width } = useWindowDimensions();

  const togglePageHandler = () => {
    setNextPage((prevState) => {
      console.log("nextPage:", nextPage);
      // return prevState === 0 ? (prevState === 1 ? 2 : 1) : 2;
      return prevState === 0 ? 1 : 1;
    });
  };

  const previousPageHandler = () => {
    setNextPage((prevState) => {
      console.log("nextPage:", nextPage);
      // return prevState === 2 ? (prevState === 1 ? 0 : 1) : 0;
      return prevState === 1 ? 0 : 0;
    });
  };
  console.log(nextPage);
  return (
    <div id="lore" className={classes.loreCont}>
      <h1 className={classes.title}>LORE</h1>

      <div className={classes.loreImgCont}>
        {width > 800 && (
          <img
            className={classes.imgOff}
            src={lorePrologue}
            alt="lore-background"
          />
        )}
        <img
          className={`${classes.img0} ${nextPage === 0 && classes.imgOn}`}
          src={lorePrologue}
          alt="lore-background"
        />
        <img
          className={`${classes.img} ${nextPage === 1 && classes.imgOn}`}
          src={loreChapter1}
          alt="lore-background"
        />
        {/* <img
          className={`${classes.img2} ${nextPage === 2 && classes.imgOn}`}
          src={lore}
          alt="lore-background"
        /> */}
        {/* <img
          className={`${classes.img2} ${nextPage === 2 && classes.imgOn}`}
          src={lore}
          alt="lore-background"
        /> */}
      </div>
      <div className={classes.loreToggleGroup}>
        <span className={classes.pageNumber}>Page {nextPage + 1}/2</span>
        <div className={classes.loreButGroup}>
          <button
            onClick={previousPageHandler}
            type="button"
            className={classes.nextPageBut}
          >
            <FontAwesomeIcon
              className={classes.arrowIcon}
              icon={faAngleDoubleLeft}
              size={width > 800 ? "3x" : "2x"}
            />
            <span className={classes.nextPageButText}>Previous</span>
          </button>

          <button
            onClick={togglePageHandler}
            type="button"
            className={classes.nextPageBut}
          >
            <span className={classes.nextPageButText}>Next</span>
            <FontAwesomeIcon
              style={width <= 800 && { marginRight: "8vw" }}
              className={classes.arrowIcon}
              icon={faAngleDoubleRight}
              size={width > 800 ? "3x" : "2x"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lore;
