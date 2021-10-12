import React from "react";

//css
import classes from "./EldersNew.module.css";

//assets
import matt from "../../Assets/matt.png";

export default function EldersNew() {
  return (
    <div className={classes.root} id="elders">
      <h1 className={classes.title}>ELDERS</h1>

      <div className={classes.firstRow}>
        <div className={classes.elder}>
          <p className={classes.name}>Cheng (PM, Marketing)</p>
          <img src={matt} className={classes.pic} />
          <p className={classes.desc}>hi my name is cheng</p>
        </div>
        <div className={classes.elder}>
          <p className={classes.name}>Cheng (PM, Marketing)</p>
          <img src={matt} className={classes.pic} />
          <p className={classes.desc}>hi my name is cheng</p>
        </div>
        <div className={classes.elder}>
          <p className={classes.name}>Cheng (PM, Marketing)</p>
          <img src={matt} className={classes.pic} />
          <p className={classes.desc}>hi my name is cheng</p>
        </div>
      </div>

      <div className={classes.secondRow}>
        <div className={classes.elder}>
          <p className={classes.name}>Cheng (PM, Marketing)</p>
          <img src={matt} className={classes.pic} />
          <p className={classes.desc}>hi my name is cheng</p>
        </div>
        <div className={classes.elder}>
          <p className={classes.name}>Cheng (PM, Marketing)</p>
          <img src={matt} className={classes.pic} />
          <p className={classes.desc}>hi my name is cheng</p>
        </div>
      </div>

      {/* <div className={classes.credentials}>
        <span className={classes.byText}>
          Yours Truly:{" "}
          <span className={classes.tavernText}>Summoner's Tavern</span>
        </span>
      </div> */}
    </div>
  );
}
