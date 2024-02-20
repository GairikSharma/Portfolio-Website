import React, { useState } from "react";
import "./Card.css";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { data } from "../../allProjects";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

function Card() {
  let projectsArrayLength = data.length;
  const [initialProjects, setInitialProjects] = useState(3);
  const [allprojectVisible, setAllProjectVisible] = useState(false);
  const setProjects = () => {
    if (initialProjects == 3) {
      setInitialProjects(projectsArrayLength);
      setAllProjectVisible(true);
    } else {
      setInitialProjects(3);
      setAllProjectVisible(false)
    }
  };
  return (
    <>
      <div className="all-cards">
        {data.slice(0, initialProjects).map((project, index) => (
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
                    window.location.href = project.github;
                  }}
                >
                  <FiGithub className="github-icon-bg" />
                </div>
                <div
                  className="proj-links-live"
                  onClick={() => {
                    window.location.href = project.live_link;
                  }}
                >
                  <FaExternalLinkAlt className="live-link-bg" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="show-more-projects" onClick={setProjects}>
        {allprojectVisible ? "Show Less" : "Show More"}
        {allprojectVisible ? (
          <IoIosArrowDropup className="show-more-less-icon" />
        ) : (
          <IoIosArrowDropdown className="show-more-less-icon" />
        )}
      </div>
    </>
  );
}

export default Card;
