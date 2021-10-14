import React from "react";

//css
import classes from "./EldersNew.module.css";

//assets
import bird from "../../Assets/birds.jpg";
import eye from "../../Assets/eye.jpg";
import drag from "../../Assets/drag.jpg";
import rat from "../../Assets/rat.jpg";
import skull from "../../Assets/skull.jpg"

export default function EldersNew() {
  return (
    <div className={classes.root} id="elders">
      <h1 className={classes.title}>ELDERS</h1>

      <div className={classes.firstRow}>
        <div className={classes.elder}>
          <p className={classes.name}>SOLsilson <br/> PM (Marketing)</p>
          <img src={drag} className={classes.pic} />
          <p className={classes.desc}>2/2 of 4Q Labs. As an NFT investor/collector who is active in many communities, he has an acute sense of the factors which make projects wildly successful. Naturally, the next logical step for him to take is to realise his ideas and share them with the community at large.</p>
        </div>


        <div className={classes.elder}>
          <p className={classes.name}>Morse Code  <br/>PM (Art), Producer</p>
          <img src={eye} className={classes.pic} />
          <p className={classes.desc}>1/2 of 4Q Labs. A practicing artist in the industry, MC’s experience in the fine arts space has enabled him to develop a keen eye for artistic talent and the best way to manage them.</p>
        </div>


        <div className={classes.elder}>
          <p className={classes.name}>Ding Ding <br/> Art Lead</p>
          <img src={rat} className={classes.pic} />
          <p className={classes.desc}>Likes to draw waifus in his parents' basement. Also does concept art and caricatures.</p>
        </div>
      </div>

      <div className={classes.secondRow}>
        <div className={classes.elder}>
          <p className={classes.name}>Cypher <br/> Web Dev</p>
          <img src={skull} className={classes.pic} />
          <p className={classes.desc}>I really really REALLY love coding.</p>
        </div>
        <div className={classes.elder}>
          <p className={classes.name}>Cheeezzyyyy <br/> Solana Dev</p>
          <img src={bird} className={classes.pic} />
          <p className={classes.desc}>Degenerate aspiring to be a professional blockchain developer.</p>
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
