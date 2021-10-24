import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import moment from "moment";
// import { Link } from "react-router-dom";

// assets
import heads from "../../Assets/NFT.jpg";
import STLogo from "../../Assets/stLogo.png";
import promoGIF from "../../Assets/promo.gif";

// Custom Hooks:
import useWindowDimensions from "../../useWindowDimensions";

// Styles:
import classes from "./Intro.module.css";
// unix timestamp of the actual launch time:1636210800
// const LAUNCH_DATE = moment([2021, 11, 6, 23, 0, 0]).valueOf();
// LAUNCH DATE: 6 NOVEMBER 2021:
const LAUNCH_DATE = 1636210800 * 1000;
console.log("LAUNCH_DATE: ", LAUNCH_DATE);

function Intro() {
  const { height, width } = useWindowDimensions();
  const openLink = (link) => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

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
    <div className={classes.introPageCont} id="home">
      {/* {width < 800 && (
        <div className={classes.headerCont}>
          <img className={classes.headerImg} src={STLogo} alt="ST-Logo" />
        </div>
      )} */}

      <div className={classes.topCont}>
        <div className={classes.mascotCont}>
          <img src={promoGIF} alt="mascot" className={classes.mascot} />
        </div>
        <div className={classes.counterTextCont}>
          {/* {width >= 800 && (
            <div className={classes.headerCont}>
              <img className={classes.headerImg} src="{STLogo}" alt="ST-Logo" />
            </div>
          )} */}
          <h1 className={classes.greetings}>Greetings Summoner,</h1>
          <p className={classes.subtitle}>Next summoning in...</p>
          {/* <span className={classes.greetingsText}>
            Countdown to Launch Date:
          </span> */}
          <div className={classes.counterCont}>
            <div className={classes.timeHeadersCont}>
              <span className={classes.timeHeader}>Days</span>
              <span className={classes.time}>{timer?.days}</span>
              {/* <span className={classes.time}>??</span> */}
            </div>
            <div className={classes.timeHeadersCont}>
              <span className={classes.timeHeader}>Hours</span>
              <span className={classes.time}>{timer?.hours}</span>
              {/* <span className={classes.time}>??</span> */}
            </div>
            <div className={classes.timeHeadersCont}>
              <span className={classes.timeHeader}>Minutes</span>
              <span className={classes.time}>{timer?.minutes}</span>
              {/* <span className={classes.time}>??</span> */}
            </div>
            <div className={classes.timeHeadersCont1}>
              <span className={classes.timeHeader}>Seconds</span>

              <span className={classes.time}>{timer?.seconds}</span>

              {/* <span className={classes.time}>??</span> */}
            </div>
          </div>
          {/* {width > 800 && (
            <>
              <button
                onClick={() =>
                  openLink(
                    "https://summoners-tavern.gitbook.io/summoners-tavern-whitepaper-x/introduction/what-is-this-project-about"
                  )
                }
                className={classes.litePaper}
              >
                WHITEPAPER
              </button>
              
            </>
          )} */}
        </div>
      </div>
      {/* <div className={classes.bottomCont}>
        {width <= 800 && (
          <>
            <button
              onClick={() =>
                openLink(
                  "https://summoners-tavern.gitbook.io/summoners-tavern-whitepaper-x/introduction/what-is-this-project-about"
                )
              }
              className={classes.litePaper}
            >
              WHITEPAPER
            </button>
            
          </>
        )}
      </div> */}
    </div>
  );
}

export default Intro;
