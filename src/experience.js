import React from "react";
import { MdBusinessCenter } from "react-icons/md";
import "./styles/experienceCard.css";
import internship25dollar from "./assets/internship25dollar.jpeg";
import gdscnsec from "./assets/gdscnsec.webp"

function ExperienceCard() {
  return (
    <>
      <div className="exp-wrapper">
        <div className="card-body-exp">
          <div className="icon-workplace-exp">
            <div className="icon-wrapper-exp">
              <img src={internship25dollar} className="exp-logo" alt="" />
            </div>
            <div className="workplace-exp">
              <div className="workplace-header-exp">25$ Support Tech</div>
              <div className="woprkplace-timeline-exp">
                Nov 2022 - Jan 2023
              </div>
            </div>
          </div>
          <div className="card-header-exp">Frontend developer Intern</div>
        </div>

        <div className="card-body-exp">
          <div className="icon-workplace-exp">
            <div className="icon-wrapper-exp">
              <img src={gdscnsec} className="exp-logo" alt="" />
            </div>
            <div className="workplace-exp">
              <div className="workplace-header-exp">GDSC (NSEC)</div>
              <div className="woprkplace-timeline-exp">
                Oct 2022 - Present
              </div>
            </div>
          </div>
          <div className="card-header-exp">Web Team member</div>
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
