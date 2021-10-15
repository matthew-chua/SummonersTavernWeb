import React from "react";

import eye from "../Assets/eye.png";

//timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "./timeline.css";
//css
import classes from "./Vision.module.css";

export default function Vision() {
  return (
    <div className={classes.root} id="roadmap">
      <h1 className={classes.title}>ROADMAP</h1>
      <div className={classes.content}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e0dacb", color: "#42434b" }}
            contentArrowStyle={{ borderRight: "7px solid  #e0dacb" }}
            iconStyle={{ background: "#ffa500", color: "#ffa500" }}
          >
            <h3 className="vertical-timeline-element-title">
              Phase 1 (Preparatory Work)
            </h3>

            <ul className={classes.list}>
              <li className={classes.done}>
                Ideation stage for artwork and website
              </li>
              <li className={classes.done}>Launch of website and socials</li>
              <li className={classes.item}>
                Finish the generation of art pieces
              </li>
              <li className={classes.item}>
                Announce details about presales and conduct presales
              </li>
              <li className={classes.item}>
                Explore the possibilities and boundaries of Smart Controls on
                Sol
              </li>
              <li className={classes.item}>
                Build the foundation for the Tavern community
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e0dacb", color: "#42434b" }}
            contentArrowStyle={{ borderRight: "7px solid  #e0dacb" }}
            iconStyle={{ background: "", color: "#e0dacb" }}
          >
            <h3 className="vertical-timeline-element-title">
              Phase 2 (Launch)
            </h3>

            <ul className={classes.list}>
              <li className={classes.item}>Smooth mint</li>
              <li className={classes.item}>
                Get listed and verified on top marketplaces
              </li>
              <li className={classes.item}>
                Set up community wallet that receives top ups from
                royalties
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e0dacb", color: "#42434b" }}
            contentArrowStyle={{ borderRight: "7px solid  #e0dacb" }}
            iconStyle={{ background: "", color: "#e0dacb" }}
          >
            <h3 className="vertical-timeline-element-title">
              Phase 3 (Post-Launch Campaign)
            </h3>

            <ul className={classes.list}>
              <li className={classes.item}>Verify summoners</li>
              <li className={classes.item}>
                Conduct community activities and host events for summoners
              </li>
              <li className={classes.item}>
                Build on the tech behind our NFTs, with the help of the
                community
              </li>
              <li className={classes.item}>
                Begin the ideation phase of the next project which will involve
                the community
              </li>
              <li className={classes.item}>
                Build our incubator's systems and processes
              </li>
              <li className={classes.item}>More to come...</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
