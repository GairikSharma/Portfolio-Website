import React from "react";
import "./styles/card.css"
import demo from "./assets/demo.png"
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { projectData } from "./data/data";

function Card() {
  return (
    <>
      {projectData.map((props) => {
        return (
          <div className="card-body">
            <div className="browser">
              <div className="circle-r"></div>
              <div className="circle-g"></div>
              <div className="circle-b"></div>
            </div>
            <div className="image-wrapper">
              <img src={props.image} alt="" className="project-overview" />
            </div>
            <div className="details">
              <div className="title-tool">
                <div className="project-title">{props.title}</div>
                <div className="project-tools">{props.tools}</div>
              </div>
              <div className="project-description">
                {props.description}
              </div>
              <div className="buttons">
                <button>
                  <a href={props.live} target="_blank">
                    <BiLinkExternal className="card-btn-icons" />
                  </a>
                </button>
                <button>
                  <a href={props.github} target="_blank">
                    <BsGithub className="card-btn-icons" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
