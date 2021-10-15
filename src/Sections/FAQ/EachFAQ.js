import React, { useState } from "react";

import classes from "./EachFAQ.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Custom Hook:
import useWindowDimensions from "../../useWindowDimensions";

// Function to get window dimensions:

function EachFAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  // Getting width:
  const { height, width } = useWindowDimensions();

  // Counting number of words:
  const wordCounter = (stringArray) => {
    let counter = 0;
    stringArray.forEach((string) => {
      counter += string.split(" ").length;
      if (12 < string.length < 20) {
        counter += 20;
      } else if (string.length > 30) counter -= 10;
    });
    if (stringArray.length > 0) {
      counter += stringArray.length * 15;
    }
    return counter;
  };
  return (
    <div
      onClick={() => setIsOpen((prevState) => !prevState)}
      className={isOpen ? classes.faqIndivContOpen : classes.faqIndivCont}
      style={
        width > 800
          ? isOpen
            ? {
                height: `${
                  Math.floor(wordCounter(answer) / 15) * 2 + 20 + 15
                }vh`,
              }
            : { height: "15vh" }
          : isOpen
          ? {
              height: `${Math.floor(wordCounter(answer) / 10) * 3.75 + 17}vh`,
            }
          : { height: "10vh" }
      }
    >
      <span className={classes.text}>{question}</span>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={isOpen ? classes.dropDownButOpen : classes.dropDownBut}
        size={width > 800 ? "2x" : "x"}
      />

      {isOpen &&
        answer?.map((para, index) => (
          <span
            style={
              isOpen
                ? {
                    display: "flex",
                    opacity: "1",
                    transition: "all 0.3s ease",
                    // top: `${width > 800 ? "20vh" : "15vh"}`,
                  }
                : { display: "none", opacity: "0" }
            }
            className={classes.answer}
          >
            {para}
          </span>
        ))}
      {/* <hr className={classes.line} /> */}
    </div>
  );
}

export default EachFAQ;
