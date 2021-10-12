import React from "react";

//assets
import discord from "../Assets/discordLogo.svg";
import twitter from "../Assets/twitterLogo1.svg";

//css
import classes from "./Socials.module.css";

export default function Socials() {
  return (
    <div className={classes.root} id="socials">
      <h1 className={classes.title}>Socials</h1>

      <div className={classes.content}>
        <div className={classes.discord}>
            <a href="https://discord.gg/zATSbfzx" target="_blank" rel="noopener noreferrer" className={classes.link}>
          <img src={discord} className={classes.pic}/>
          <p className={classes.label}>Discord</p>
          </a>
        </div>
        <div className={classes.twitter} >
        <a href="https://twitter.com/SummonersTavern" target="_blank" rel="noopener noreferrer" className={classes.link}>
          <img src={twitter} className={classes.pic}/>
          <p className={classes.label}>Twitter</p>
          </a>
        </div>
      </div>
      <p className={classes.subtitle}>
        Join our discord or find us on Twitter to meet other summoners!
      </p>
    </div>
  );
}
