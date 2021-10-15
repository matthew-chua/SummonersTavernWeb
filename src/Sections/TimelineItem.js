import React from "react";

//assets
import eye from "../Assets/eye.png";

//css
import classes from "./TimelineItem.module.css";

export default function TimelineItem({ data }) {
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h3>{data.title}</h3>
        {data.content.map((point) => (
          <div className={classes.bullets}>
            <img src={eye} />
            <p>{point}</p>
          </div>
        ))}
      </div>
      <span className={classes.circle}/>
    </div>
  );
}
