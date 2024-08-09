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
            // border: "1px solid #FFFFFF",
            background: "#FFFFFF",
            borderRadius: "3px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.5px)",
            color: "rgb(10, 25, 47)"
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #FFFFFF",
          }}
          iconStyle={{ background: "transparent", color: "#fff" }}
          icon={<FaGraduationCap style={{ background: "transparent" }} />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ background: "transparent", fontWeight: "600" }}
          >
            WBBSE (2018)
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ background: "transparent", fontWeight: "600" }}
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
            // border: "1px solid #FFFFFF",
            background: "#FFFFFF",
            borderRadius: "3px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.5px)",
            color: "rgb(10, 25, 47)"
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #FFFFFF",
          }}
          iconStyle={{ background: "transparent", color: "#fff" }}
          icon={<FaGraduationCap style={{ background: "transparent" }} />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ background: "transparent", fontWeight: "600" }}
          >
            WBCHSE (2020)
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ background: "transparent", fontWeight: "600" }}
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
            // border: "1px solid #FFFFFF",
            background: "#FFFFFF",
            borderRadius: "3px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.5px)",
            color: "rgb(10, 25, 47)"
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #FFFFFF",
          }}
          iconStyle={{ background: "transparent", color: "#fff" }}
          icon={<FaGraduationCap style={{ background: "transparent" }} />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ background: "transparent", fontWeight: "600" }}
          >
            B.Tech in Electronics & Communication Engineering
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ background: "transparent", fontWeight: "600" }}
          >
            Netaji Subhash Engineering College (2024)
          </h4> 
          <p style={{ background: "transparent" }}>
            Completed B.Tech in Electronics & Communication
            Engineering from Netaji Subhash Engineering College with CGPA: 9.03.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default Education;
