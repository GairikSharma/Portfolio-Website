import React, { useEffect } from "react";
import "./styles/card.css";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { projectData } from "./data/data";
import Aos from "aos";
import "aos/dist/aos.css";

function Card() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {projectData.map((props) => {
        return (
          <div className="card-body" data-aos={props.id%2==0 ? "fade-left" : "fade-right"}>
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
              <div className="project-description">{props.description}</div>
              <div className="buttons">
                <button>
                  <a
                    style={{ backgroundColor: "rgb(23, 42, 69)" }}
                    href={props.live}
                    target="_blank"
                  >
                    <BiLinkExternal className="card-btn-icons" />
                  </a>
                </button>
                <button>
                  <a
                    style={{ backgroundColor: "rgb(23, 42, 69)" }}
                    href={props.github}
                    target="_blank"
                  >
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
