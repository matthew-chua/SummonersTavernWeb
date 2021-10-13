import React from 'react'

//assets
import gif from "../Assets/mascot.png";

import classes from "./Mission.module.css";

export default function Mission() {
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>MISSION</h1>

            <div className={classes.content}>
            <img src={gif} className={classes.gif}/>
            <p className={classes.text}>lorem ipsum chong tian need add his stuff here</p>
            </div>
        </div>
    )
}
