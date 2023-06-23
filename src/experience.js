import React from "react";
import { MdBusinessCenter } from "react-icons/md";
import "./styles/experienceCard.css"

function ExperienceCard() {
  return (
    <>
      <div className="card-body-exp">
        <div className="icon-workplace-exp">
          <div className="icon-wrapper-exp">
            <MdBusinessCenter className="icon-exp" />
          </div>
          <div className="workplace-exp">
            <div className="workplace-header-exp">25$ Support Tech</div>
            <div className="woprkplace-timeline-exp">
              November 2022 - January 2023
            </div>
          </div>
        </div>
        <div className="card-header-exp">Frontend developer Intern</div>
        <div className="card-description-exp">
            Developing and managing the frontend of a project.Handled day to day
            responsibilities.Worked with the team
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
