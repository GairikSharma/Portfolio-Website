import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
            borderTop: "5px solid rgb(33, 150, 243)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaGraduationCap style={{background: "transparent"}} />}
        >
          <h3 className="vertical-timeline-element-title" style={{background: "white",}}>WBBSE (2018)</h3>
          <h4 className="vertical-timeline-element-subtitle" style={{background: "white",}}>
            Gangapuri Siksha Sadan
          </h4>
          <p style={{background: "white"}}>
            I have completed my 10th from Gangapuri Siksha Sadan under WBBSE in
            2018 with 73%.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
            borderTop: "5px solid rgb(16, 154, 11)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(16, 154, 11)" }}
          iconStyle={{ background: "rgb(16, 154, 11)", color: "#fff" }}
          icon={<FaGraduationCap style={{background: "transparent"}} />}
        >
          <h3 className="vertical-timeline-element-title" style={{background: "white",}}>WBCHSE (2020)</h3>
          <h4 className="vertical-timeline-element-subtitle" style={{background: "white",}}>
            Gangapuri Siksha Sadan
          </h4>
          <p style={{background: "white",}}>
            I have completed my 10+2 from Gangapuri Siksha Sadan under WBCHSE in
            2020 with 79%.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
            borderTop: "5px solid rgb(223, 216, 6)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(223, 216, 6)" }}
          iconStyle={{ background: "rgb(223, 216, 6)", color: "#fff" }}
          icon={<FaGraduationCap style={{background: "transparent"}} />}
        >
          <h3 className="vertical-timeline-element-title" style={{background: "white",}}>
            B.Tech in Electronics & Communication Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{background: "white",}}>
            Netaji Subhash Engineering College
          </h4>
          <p style={{background: "white",}}>
            Currently I'm persuing B.Tech in Electronics & Communication
            Engineering from Netaji Subhash Engineering College.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default Education;
