import React from "react";
import "./Card.css";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { data } from "../../allProjects";

function Card() {
  return (
    <div className="all-cards">
      {data.map((project, index) => (
        <div className="card-container" key={index}>
          <div className="proj-card-image">
            <img
              className="proj-card-actual-img"
              src={project.image}
              alt=""
            />
            <div className="image-blender"></div>
          </div>
          <div className="description-container">
            <div className="proj-card-title">{project.title}</div>
            <div className="proj-card-skills">{project.tech_stack}</div>
            <div className="proj-card-description">{project.description}</div>
            <div className="proj-links-wrapper">
              <div 
              className="proj-links-github"
              onClick={() => {
                window.location.href = project.github
              }}
              >
                <FiGithub className="github-icon-bg" />
              </div>
              <div 
              className="proj-links-live"
              onClick={() => {
                window.location.href = project.live_link
              }}
              >
                <FaExternalLinkAlt className="live-link-bg" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
