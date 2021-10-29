import React from "react";

import eye from "../Assets/eye.png";

//timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "./timeline.css";
import "react-vertical-timeline-component/style.min.css";
//css
import classes from "./Vision.module.css";

export default function Vision() {
  return (
    <div className={classes.root} id="roadmap">
      <h1 className={classes.title}>ROADMAP</h1>
      <div className={classes.content}>
        <VerticalTimeline layout={"2-columns"}>
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
              <li className={classes.done}>
                Finish the generation of art pieces
              </li>
              <li className={classes.done}>
                Explore the possibilities and boundaries of Smart Contracts on
                Sol
              </li>
              <li className={classes.done}>Announce details about auction</li>
              <li className={classes.done}>
                Build the foundation for the Tavern community
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e0dacb", color: "#42434b" }}
            contentArrowStyle={{ borderRight: "7px solid  #e0dacb" }}
            // layout={"2-columns"}
            iconStyle={{ background: "#e0dacb", color: "#e0dacb" }}
          >
            <h3 className="vertical-timeline-element-title">
              Phase 2 (Launch)
            </h3>

            <ul className={classes.list}>
              <li className={classes.item}>Auction, in 5 batches of 10</li>
              <li className={classes.item}>
                Get verified and listed on top marketplaces
              </li>
              <li className={classes.item}>
                Set up a community wallet that receives 5% of the sales proceeds
                and a portion of the secondary royalties (Decisions on how the
                funds are spent will be made by the community)
              </li>
              <li className={classes.item}>
                Do a "boss raid" on Twitter to gain traction among the community
              </li>
              <li className={classes.item}>
                This treasury is to acquire art pieces for the community and to
                attract art talent
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e0dacb", color: "#42434b" }}
            contentArrowStyle={{ borderRight: "7px solid  #e0dacb" }}
            iconStyle={{ background: "#e0dacb", color: "#e0dacb" }}
          >
            <h3 className="vertical-timeline-element-title">
              Phase 3 (Post-Launch Campaign)
            </h3>

            <ul className={classes.list}>
              <li className={classes.item}>
                Conduct community activities and host events for summoners
              </li>
              <li className={classes.item}>Hold monthly town hall meetings</li>
              <li className={classes.item}>
                Build on the tech behind our NFTs, focusing on airdrops
              </li>
              <li className={classes.item}>
                Begin the ideation phase of the next project and heavily involve
                the community
              </li>
              <li className={classes.item}>
                Streamline our incubator’s systems and processes
              </li>
              <li className={classes.item}>More to come...</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
