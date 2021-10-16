import React from "react";

// Styles:
import classes from "./Menu.module.css";

//assets
import twitter from "../Assets/twitterLogo1.svg";
import discord from "../Assets/discordLogo.svg";
import mug from "../Assets/mug.png";

function Menu({ menuOpen, setMenuOpen }) {
  const closeMenuHandler = () => {
    setMenuOpen(false);
  };

  const openLink = (link) => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className={`${classes.menu} ${menuOpen && classes.menuActive}`}>
      <div
        className={`${classes.wrapper} ${menuOpen && classes.wrapperActive}`}
      >
        <section className={classes.section}>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <a
                className={`${menuOpen && classes.aActive} ${classes.a}`}
                href="#home"
                data-text="home"
                onClick={closeMenuHandler}
              >
                <img src={mug} className={classes.mug} />
              </a>
            </li>
            <li className={classes.li}>
              <a
                className={`${menuOpen && classes.aActive} ${classes.a}`}
                href="#lore"
                data-text="lore"
                onClick={closeMenuHandler}
              >
                Lore
              </a>
            </li>
            <li className={classes.li}>
              <a
                className={`${menuOpen && classes.aActive} ${classes.a}`}
                href="#char"
                data-text="Characters"
                onClick={closeMenuHandler}
              >
                Outworlders
              </a>
            </li>
            <li className={classes.li}>
              <a
                className={`${menuOpen && classes.aActive} ${classes.a}`}
                href="#roadmap"
                data-text="vision"
                onClick={closeMenuHandler}
              >
                Roadmap
              </a>
            </li>

            <li className={classes.li}>
              <a
                className={`${menuOpen && classes.aActive} ${classes.a}`}
                href="#faq"
                data-text="FAQ"
                onClick={closeMenuHandler}
              >
                FAQ
              </a>
            </li>
            <li className={classes.li}>
              <a
                className={`${menuOpen && classes.aActive} ${classes.a}`}
                href="#elders"
                data-text="Elders"
                onClick={closeMenuHandler}
              >
                Elders
              </a>
            </li>
            <li className={classes.li}>
              <a
                className={`${menuOpen && classes.aActive} ${classes.a}`}
                href="https://summoners-tavern.gitbook.io/summoners-tavern-whitepaper-x/introduction/what-is-this-project-about" target="_blank" rel="noopener noreferrer"
                data-text="Whitepaper"
                onClick={closeMenuHandler}
              >
                whitepaper
              </a>
            </li>
            <li className={classes.li}>
              <div
                className={`${classes.socials} ${
                  menuOpen && classes.socialsOpen
                }`}
              >
                <img
                  src={discord}
                  onClick={() => openLink("https://discord.gg/DhZ4mRKh3U")}
                  className={classes.icon}
                />
                <img
                  src={twitter}
                  onClick={() =>
                    openLink("https://twitter.com/SummonersTavern")
                  }
                  className={classes.icon}
                />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Menu;
