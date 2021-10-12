import React, { useState } from "react";

import classes from "./EachFAQ.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

function EachFAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen((prevState) => !prevState)}
      className={isOpen ? classes.faqIndivContOpen : classes.faqIndivCont}
    >
      <span className={classes.text}>{question}</span>
      <FontAwesomeIcon
        icon={faChevronCircleDown}
        className={isOpen ? classes.dropDownButOpen : classes.dropDownBut}
        size="4x"
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
