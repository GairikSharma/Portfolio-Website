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
            border: "1px solid rgba(66, 233, 239, 0.891)",
            background: "rgba(58, 226, 255, 0.17)",
            borderRadius: "3px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.5px)",
            color: "white",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgba(66, 233, 239, 0.891)" }}
          iconStyle={{ background: "transparent", color: "#fff" }}
          icon={<FaGraduationCap style={{ background: "transparent" }} />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ background: "transparent" }}
          >
            WBBSE (2018)
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ background: "transparent" }}
          >
            Gangapuri Siksha Sadan
          </h4>
          <p style={{ background: "transparent" }}>
            I have completed my 10th from Gangapuri Siksha Sadan under WBBSE in
            2018 with 73%.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "1px solid rgba(66, 233, 239, 0.891)",
            background: "rgba(58, 226, 255, 0.17)",
            borderRadius: "3px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.5px)",
            color: "white",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgba(66, 233, 239, 0.891)" }}
          iconStyle={{ background: "transparent", color: "#fff" }}
          icon={<FaGraduationCap style={{ background: "transparent" }} />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ background: "transparent" }}
          >
            WBCHSE (2020)
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ background: "transparent" }}
          >
            Gangapuri Siksha Sadan
          </h4>
          <p style={{ background: "transparent" }}>
            I have completed my 10+2 from Gangapuri Siksha Sadan under WBCHSE in
            2020 with 79%.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "1px solid rgba(66, 233, 239, 0.891)",
            background: "rgba(58, 226, 255, 0.17)",
            borderRadius: "3px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.5px)",
            color: "white",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgba(66, 233, 239, 0.891)" }}
          iconStyle={{ background: "transparent", color: "#fff" }}
          icon={<FaGraduationCap style={{ background: "transparent" }} />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ background: "transparent" }}
          >
            B.Tech in Electronics & Communication Engineering
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ background: "transparent" }}
          >
            Netaji Subhash Engineering College
          </h4>
          <p style={{ background: "transparent" }}>
            Currently I'm persuing B.Tech in Electronics & Communication
            Engineering from Netaji Subhash Engineering College.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default Education;
