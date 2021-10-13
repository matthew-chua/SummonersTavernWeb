import React from "react";

// Styles:
import classes from "./CharIntro.module.css";

//assets
import pic from "../../Assets/unknown.png";

function CharIntro() {
  return (
    <div className={classes.charIntroCont}>
      <h1 className={classes.title}>CHARACTER INTRODUCTION</h1>

      <div className={classes.content}>
        <div className={classes.top}>
          <div className={classes.char}>
            <img src={pic} className={classes.pic} />
            <h3>char 1 name</h3>
            <p>description here, lorem ipsum blah blah </p>
          </div>

          <div className={classes.char}>
            <img src={pic} className={classes.pic} />
            <h3>char 2 name</h3>
            <p>description here, lorem ipsum blah blah </p>
          </div>

          <div className={classes.char}>
            <img src={pic} className={classes.pic} />
            <h3>char 3 name</h3>
            <p>description here, lorem ipsum blah blah </p>
          </div>
        </div>

        <div className={classes.bottom}>
          <div className={classes.char}>
            <img src={pic} className={classes.pic} />
            <h3>char 1 name</h3>
            <p>description here, lorem ipsum blah blah </p>
          </div>

          <div className={classes.char}>
            <img src={pic} className={classes.pic} />
            <h3>char 2 name</h3>
            <p>description here, lorem ipsum blah blah </p>
          </div>

          <div className={classes.char}>
            <img src={pic} className={classes.pic} />
            <h3>char 3 name</h3>
            <p>description here, lorem ipsum blah blah </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharIntro;
