import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import moment from "moment";
// import { Link } from "react-router-dom";

// Logos:
import discordLogo from "../../Assets/discordLogo.svg";
import twitterLogo from "../../Assets/twitterLogo1.svg";

// Styles:
import classes from "./Intro.module.css";
// unix timestamp of the actual launch time:
const LAUNCH_DATE = moment([2021, 11, 15, 7, 0, 0]).valueOf();
console.log("LAUNCH_DATE: ", LAUNCH_DATE);

function Intro() {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const openLink = (link) => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

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
    <div className={classes.introPageCont}>
      <div className={classes.topCont}>
        <div className={classes.mascotCont}>
          <img src="" alt="mascot" />
        </div>
        <div className={classes.counterTextCont}>
          <h1 className={classes.greetings}>Greetings Summoner,</h1>
          <span className={classes.greetingsText}>
            Welcome to Summoner's Tavern.
          </span>
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
            <div className={classes.timeHeadersCont1}>
              <span className={classes.timeHeader}>Seconds</span>

              <span className={classes.time}>{timer?.seconds}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottomCont}>
        <button
          onClick={() =>
            openLink(
              "https://docs.google.com/document/d/1ILW5uRnzDpTHuA-zI69Y1xXFeYH9daEBdN62Y_4iRvg/edit"
            )
          }
          className={classes.litePaper}
        >
          LITEPAPER
        </button>
        <div className={classes.socialMediaCont}>
          <button
            onClick={() => openLink("https://discord.gg/zATSbfzx")}
            className={classes.mediaGroup}
          >
            {/* <div className={classes.smImgCont}> */}
            <img
              className={classes.smImg}
              src={discordLogo}
              alt="discord-logo"
            />
            {/* </div> */}
            <span className={classes.mediaName}>Discord</span>
          </button>
          <button
            onClick={() => openLink("https://twitter.com/SummonersTavern")}
            className={classes.mediaGroup}
          >
            {/* <div className={classes.smImgCont}> */}{" "}
            <img
              className={classes.smImg}
              src={twitterLogo}
              alt="twitter-logo"
            />
            {/* </div> */}
            <span className={classes.mediaName}>Twitter</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
