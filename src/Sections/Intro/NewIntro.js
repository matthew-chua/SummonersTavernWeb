import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";

//assets
import pic from "../../Assets/mascot.png";
import logo from "../../Assets/stLogo.png";
//css
import classes from "./NewIntro.module.css";
export default function NewIntro() {
  const LAUNCH_DATE = moment([2021, 11, 15, 7, 0, 0]).valueOf();

  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    let now = new Date().valueOf();
    console.log(now);
    let countDownTimer = setInterval(() => {
      let timeLeft = LAUNCH_DATE - now;

      let daysLeft = Math.floor(timeLeft / (86400 * 1000));
      console.log("DayLeft: ", daysLeft);
      let hoursLeft = Math.floor(
        (timeLeft - daysLeft * 86400 * 1000) / (3600 * 1000)
      );
      let minutesLeft = Math.floor(
        (timeLeft - daysLeft * 86400 * 1000 - hoursLeft * 3600 * 1000) /
          (60 * 1000)
      );
      let secondsLeft = Math.floor(
        (timeLeft -
          daysLeft * 86400 * 1000 -
          hoursLeft * 3600 * 1000 -
          minutesLeft * 60 * 1000) /
          1000
      );

      setTimer({
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft,
      });
    }, 1000);
    return () => {
      clearInterval(countDownTimer);
    };
  }, [timer]);
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <img src={pic} alt="heads" className={classes.pic} />
      </div>

      <div className={classes.right}>
        <img src={logo} alt="chengsLogo" className={classes.logo} />

        <div className={classes.subtitle}>
          <h1>Greetings,</h1>
          <p>Next summoning in...</p>
        </div>
        <div className={classes.counterCont}>
          <div className={classes.timeHeadersCont}>
            <span className={classes.timeHeader}>Days</span>
            <span className={classes.time}>{timer?.days}</span>
          </div>

          <div className={classes.timeHeadersCont}>
            <span className={classes.timeHeader}>Hours</span>
            <span className={classes.time}>{timer?.hours}</span>
          </div>

          <div className={classes.timeHeadersCont}>
            <span className={classes.timeHeader}>Minutes</span>
            <span className={classes.time}>{timer?.minutes}</span>
          </div>

          <div className={classes.timeHeadersCont}>
            <span className={classes.timeHeader}>Seconds</span>
            <span className={classes.time}>{timer?.seconds}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
