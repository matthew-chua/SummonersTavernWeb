import React from "react";

//css
import classes from "./NavBar.module.css";

//assets
import twitter from "./Assets/twitterLogo1.svg";
import discord from "./Assets/discordLogo.svg";
import logo from "./Assets/webLogo.png";


export default function NavBar() {
  const openLink = (link) => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <a className={classes.link} href="#home">
          <img src={logo} className={classes.logo}/>
        </a>
        <a className={classes.link} href="#lore">
          LORE
        </a>
        {/* <a className={classes.link} href="#attributes">
          Attributes
        </a> */}
        <a className={classes.link} href="#char">
          OUTWORLDERS
        </a>
        <a className={classes.link} href="#roadmap">
          ROADMAP
        </a>
        <a className={classes.link} href="#faq">
          FAQ
        </a>
        <a className={classes.link} href="#elders">
          ELDERS
        </a>
        {/* <a className={classes.link} href="#socials">
          Socials
        </a> */}
      </div>
      <div className={classes.right}>
        <img
          src={discord}
          onClick={() => openLink("https://discord.gg/DhZ4mRKh3U")}
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
