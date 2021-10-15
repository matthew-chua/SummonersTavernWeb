import React from 'react'

import data from "./TimelineData";

//components
import TimelineItem from './TimelineItem';

//css
import classes from "./Timeline.module.css";

export default function Timeline() {
    return (
        <div className={classes.root}>
            {data.map((item)=>(
                <TimelineItem data={item} className={classes.item}/>
            ))}
        </div>
    )
}
