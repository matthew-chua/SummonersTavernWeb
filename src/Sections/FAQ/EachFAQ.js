import React, { useState } from "react";

import classes from "./EachFAQ.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

// Custom Hook:
import useWindowDimensions from "../../useWindowDimensions";

// Function to get window dimensions:

function EachFAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  // Getting width:
  const { height, width } = useWindowDimensions();
  return (
    <div
      onClick={() => setIsOpen((prevState) => !prevState)}
      className={isOpen ? classes.faqIndivContOpen : classes.faqIndivCont}
    >
      <span className={classes.text}>{question}</span>
      <FontAwesomeIcon
        icon={faChevronCircleDown}
        className={isOpen ? classes.dropDownButOpen : classes.dropDownBut}
        size={width > 800 ? "4x" : "2x"}
      />

      {isOpen && (
        <span
          style={
            isOpen
              ? {
                  display: "flex",
                  opacity: "100%",
                  transition: "all 0.3s ease",
                }
              : { display: "none", opacity: "0%" }
          }
          className={classes.answer}
        >
          {answer}
        </span>
      )}
    </div>
  );
}

export default EachFAQ;
