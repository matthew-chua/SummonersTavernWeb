import React from "react";

// Styles:
import classes from "./Menu.module.css";

function Menu({ menuOpen, setMenuOpen }) {
  const closeMenuHandler = () => {
    setMenuOpen(false);
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
                className={classes.a}
                href="#home"
                data-text="home"
                onClick={closeMenuHandler}
              >
                Home
              </a>
            </li>
            <li className={classes.li}>
              <a
                className={classes.a}
                href="#lore"
                data-text="lore"
                onClick={closeMenuHandler}
              >
                Lore
              </a>
            </li>
            <li className={classes.li}>
              <a
                className={classes.a}
                href="#attributes"
                data-text="attributes"
                onClick={closeMenuHandler}
              >
                Attributes
              </a>
            </li>
            <li className={classes.li}>
              <a
                className={classes.a}
                href="#char"
                data-text="Characters"
                onClick={closeMenuHandler}
              >
                Characters
              </a>
            </li>
            <li className={classes.li}>
              <a
                className={classes.a}
                href="#faq"
                data-text="FAQ"
                onClick={closeMenuHandler}
              >
                FAQ
              </a>
            </li>
            <li className={classes.li}>
              <a
                className={classes.a}
                href="#elders"
                data-text="Elders"
                onClick={closeMenuHandler}
              >
                Elders
              </a>
            </li>
            <li className={classes.li}>
              <a
                className={classes.a}
                href="#socials"
                data-text="Socials"
                onClick={closeMenuHandler}
              >
                Socials
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Menu;
