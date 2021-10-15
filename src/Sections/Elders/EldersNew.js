import React from "react";

//css
import classes from "./EldersNew.module.css";

//assets
import bird from "../../Assets/birds.jpg";
import eye from "../../Assets/eye.jpg";
import drag from "../../Assets/drag.jpg";
import rat from "../../Assets/rat.jpg";
import skull from "../../Assets/skull.jpg";

export default function EldersNew() {
  const openLink = (link) => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.root} id="elders">
      <h1 className={classes.title}>ELDERS</h1>

      <div className={classes.firstRow}>
        <div className={classes.elder}>
          <p className={classes.name}>SOLsilson</p>
          <p className={classes.nameTitle}>PM (Marketing)</p>
          <img
            src={drag}
            className={classes.pic}
            onClick={() => openLink("https://twitter.com/SOLsilson")}
          />
          <p className={classes.desc}>
            1/2 of 4Q Labs.
            <br /> <br />
            Collects JPEGs for a living. Knows what makes projects wildly
            successful.
          </p>
        </div>

        <div className={classes.elder}>
          <p className={classes.name}>Morse Code </p>
          <p className={classes.nameTitle}>PM (Art), Producer</p>
          <img
            src={eye}
            className={classes.pic}
            onClick={() => openLink("https://twitter.com/Sol_MorseCode")}
          />
          <p className={classes.desc}>
            2/2 of 4Q Labs. <br />
            <br />
            Practicing artist. Professional PNG curator.
          </p>
        </div>

        <div className={classes.elder}>
          <p className={classes.name}>Ding Ding</p>
          <p className={classes.nameTitle}>Art Lead</p>
          <img
            src={rat}
            className={classes.pic}
            onClick={() => openLink("https://dingding15.artstation.com")}
          />
          <p className={classes.desc}>
            Likes to draw waifus in his parents' basement. Also does concept art
            and caricatures.
          </p>
        </div>
      </div>

      <div className={classes.secondRow}>
        <div className={classes.elder}>
          <p className={classes.name}>Cypher</p>
          <p className={classes.nameTitle}>Web Dev</p>
          <img
            src={skull}
            className={classes.pic}
            onClick={() => openLink("https://twitter.com/sol_cypher")}
          />
          <p className={classes.desc}>I really really REALLY love coding.</p>
        </div>
        <div className={classes.elder}>
          <p className={classes.name}>Cheeezzyyyy</p>
          <p className={classes.nameTitle}>Solana Dev</p>
          <img
            src={bird}
            className={classes.pic}
            onClick={() => openLink("https://twitter.com/SOL_Cheeezzyyyy")}
          />
          <p className={classes.desc}>
            Degenerate aspiring to be a professional blockchain developer.
          </p>
        </div>
      </div>
      <div className={classes.whitePaperContainer}>
      <button
      className={classes.litePaper}
      onClick={() =>
        openLink(
          "https://summoners-tavern.gitbook.io/summoners-tavern-whitepaper-x/introduction/what-is-this-project-about"
          )
        }
        >
        WHITEPAPER
      </button>
        <p className={classes.text}>Read our whitepaper to find out more!</p>
      </div>
    </div>
  );
}
