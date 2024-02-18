import React, { useEffect } from "react";
import "./styles/projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Card from "./components/ProjectCard/Card";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="all-projects">
        <Card />
      </div>
    </>
  );
}

export default Projects;
