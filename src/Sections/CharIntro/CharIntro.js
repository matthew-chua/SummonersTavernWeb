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
            <h3 className={classes.name}>Princess Atta</h3>
            <p className={classes.desc}>
              The crown princess of the Antions, a proud race of insectoids. She
              lost her family and kingdom in a savage attack by the rival
              Hoplites. Forced to flee, she vowed to one day have her revenge on
              the Hoplites who took her birthright from her. As per ancient
              Antion tradition, she is well-trained in mixed martial arts and is
              an expert in melee weapons.
            </p>
          </div>

          <div className={classes.char}>
            <img src={pic4} className={classes.pic} />
            <h3 className={classes.name}>Ellemir</h3>
            <p className={classes.desc}>
              She had hoped her natural gift for the arcane could protect her
              family from the war, but when the hordes overwhelmed her hometown
              she was left with nothing. She promised herself that she wouldn't
              let such horrors befall her loved ones, and knew there was only
              one way to train and repel the dangers of the hostile world:
              Adventure.
            </p>
          </div>
        </div>

        <div className={classes.bottom}>
          <div className={classes.char}>
            <img src={pic3} className={classes.pic} />
            <h3 className={classes.name}>Khongh</h3>
            <p className={classes.desc}>
              A green orc sits quietly in the corner of the tavern with nothing
              on his table but breadcrumbs and an empty stein. It appears he has
              been sitting there for quite some time, yet no one knows where has
              come from. However, there have been rumours behind the strange
              powers of his third eye.
            </p>
          </div>

          <div className={classes.char}>
            <img src={pic5} className={classes.pic} />
            <h3 className={classes.name}>Acheron</h3>
            <p className={classes.desc}>
              Formerly from the underworld, he left the place when all hell
              broke loose during a coup. He took up the mantle of "Blue Devil"
              as he climbed back to the human world. Many heroes hunted him down
              even though he only yearned for tranquility and peace. That was
              when the Tavern Owner found him and gave him a place to call home.
            </p>
          </div>

          <div className={classes.char}>
            <img src={pic6} className={classes.pic} />
            <h3 className={classes.name}>Zhu</h3>
            <p className={classes.desc}>
              He seeks the portal's power to revive his wife, who was lost in
              battle defending the kingdom of Yami. Upon touching the portal,
              his body was imbued with the cosmic glow, giving him the power of
              foresight, and the ability to travel through the portal system.
              However, travel through the portals contracts comes at a hefty
              price....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharIntro;
