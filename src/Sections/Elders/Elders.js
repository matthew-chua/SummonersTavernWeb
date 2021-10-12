import React from "react";
import matt from "../../Assets/matt.png";


// Styles:
import classes from "./Elders.module.css";

const ELDERS_DETAILS = [
  { name: "CT", image: "", desc: "Creator" },
  { name: "Cheng", image: "", desc: "Creator" },
  { name: "JR", image: "", desc: "Artist" },
  { name: "mattsies", image: "../../Assets/matt.png", desc: "NFT Dev" },
  { name: "Victzy", image: "", desc: "NFT Dev" },
];

function Elders() {
  return (
    <>
      <div className={classes.elderPageCont} id="elders">
        <img src={matt}/>
        <h1 className={classes.title}>Elders</h1>
        <div className={classes.eldersCont}>
          {ELDERS_DETAILS.map((elder) => (
            <div className={classes.elder}>
              <h2 className={classes.name}>{elder.name}</h2>
              <div className={classes.profileImgCont}>
                {/* <img
                  className={classes.profileImg}
                  src={require({elder.image} +
                  item.image +
                  '.png')}
                  alt={`profile-${elder.name}`}
                /> */}
              </div>
              <span className={classes.desc}>{elder.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.credentials}>
        <span className={classes.byText}>
          Yours Truly:{" "}
          <span className={classes.tavernText}>Summoner's Tavern</span>
        </span>
      </div>
    </>
  );
}

export default Elders;
