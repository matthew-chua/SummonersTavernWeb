import React from "react";

// Styles:
import classes from "./CharIntro.module.css";

//assets

import sil5 from "../../Assets/5.png";
import sil4 from "../../Assets/4.png";
import sil3 from "../../Assets/3.png";
import sil2 from "../../Assets/2.png";
import sil1 from "../../Assets/1.png";
import post from "../../Assets/post.png";

function CharIntro() {
  return (
    <div className={classes.charIntroCont} id="char">
      <h1 className={classes.title}>OUTWORLDERS</h1>

      <div className={classes.content}>
        <div className={classes.top}>
          
          <div className={classes.char}>
            <img src={post} className={classes.pic} />
            <h3 className={classes.name}>Lilith</h3>
            <p className={classes.desc}>
              Hailing from the demonic gates of Gehenna, Lilith is on an
              unending quest to rank up to an arch-demon through the portal's
              contracts… 
            </p>
          </div>

          <div className={classes.char}>
            <img src={sil1} className={classes.pic} />
            <h3 className={classes.name}>?</h3>
            <p className={classes.desc}>???</p>
          </div>

          <div className={classes.char}>
            <img src={sil2} className={classes.pic} />
            <h3 className={classes.name}>?</h3>
            <p className={classes.desc}>???</p>
          </div>
        </div>

        <div className={classes.bottom}>
          <div className={classes.char}>
            <img src={sil3} className={classes.pic} />
            <h3 className={classes.name}>?</h3>
            <p className={classes.desc}>???</p>
          </div>

          <div className={classes.char}>
            <img src={sil4} className={classes.pic} />
            <h3 className={classes.name}>?</h3>
            <p className={classes.desc}>???</p>
          </div>

          <div className={classes.char}>
            <img src={sil5} className={classes.pic} />
            <h3 className={classes.name}>?</h3>
            <p className={classes.desc}>???</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharIntro;
