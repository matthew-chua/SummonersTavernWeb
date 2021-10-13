import React, { useState } from "react";

import EachFAQ from "./EachFAQ";

// Styles:
import classes from "./FAQ.module.css";

// Info:
import { FAQ_LIST } from "../../Info";

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState([]);
  return (
    <div className={classes.FAQPageCont} id="faq">
      <h1 className={classes.title}>FAQ</h1>
      <div className={classes.FAQCont}>
        {FAQ_LIST.map((faq) => (
          <EachFAQ question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
