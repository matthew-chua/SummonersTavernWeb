import React from "react";

// Styles:
import classes from "./CharIntro.module.css";

//assets

import pic5 from "../../Assets/no5.png";
import pic4 from "../../Assets/no4.png";
import pic3 from "../../Assets/no3.png";
import pic2 from "../../Assets/no2.png";
import pic1 from "../../Assets/no1.png";
import pic6 from "../../Assets/no6.png";

function CharIntro() {
  return (
    <div className={classes.charIntroCont} id="char">
      <h1 className={classes.title}>OUTWORLDERS</h1>

      <div className={classes.content}>
        <div className={classes.top}>
          
          <div className={classes.char}>
            <img src={pic1} className={classes.pic} />
            <h3 className={classes.name}>Lilith</h3>
            <p className={classes.desc}>
              Hailing from the demonic gates of Gehenna, Lilith is on an
              unending quest to rank up to an arch-demon through the portal's
              contracts… 
            </p>
          </div>

          <div className={classes.char}>
            <img src={pic2} className={classes.pic} />
            <h3 className={classes.name}>?</h3>
            <p className={classes.desc}>???</p>
          </div>

          <div className={classes.char}>
            <img src={pic4} className={classes.pic} />
            <h3 className={classes.name}>?</h3>
            <p className={classes.desc}>???</p>
          </div>
        </div>

        <div className={classes.bottom}>
          <div className={classes.char}>
            <img src={pic3} className={classes.pic} />
            <h3 className={classes.name}>?</h3>
            <p className={classes.desc}>???</p>
          </div>

          <div className={classes.char}>
            <img src={pic5} className={classes.pic} />
            <h3 className={classes.name}>?</h3>
            <p className={classes.desc}>???</p>
          </div>

          <div className={classes.char}>
            <img src={pic6} className={classes.pic} />
            <h3 className={classes.name}>?</h3>
            <p className={classes.desc}>???</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharIntro;
