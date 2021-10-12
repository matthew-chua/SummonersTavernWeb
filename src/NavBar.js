import React from "react";

//css
import classes from "./NavBar.module.css";

//assets
import twitter from "./Assets/twitterLogo1.svg";
import discord from "./Assets/discordLogo.svg";

export default function NavBar() {
  const openLink = (link) => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <a className={classes.link} href="#home">
          Home
        </a>
        <a className={classes.link} href="#lore">
          Lore
        </a>
        <a className={classes.link} href="#attributes">
          Attributes
        </a>
        <a className={classes.link} href="#elders">
          Elders
        </a>
        <a className={classes.link} href="#socials">
          Socials
        </a>
      </div>
      <div className={classes.right}>
        <img
          src={discord}
          onClick={() => openLink("https://twitter.com/SummonersTavern")}
          className={classes.icon}
        />
        <img
          src={twitter}
          onClick={() => openLink("https://twitter.com/SummonersTavern")}
          className={classes.icon}
        />
      </div>
    </div>
  );
}
