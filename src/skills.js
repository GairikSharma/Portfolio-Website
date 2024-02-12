import React, { useEffect } from "react";
import "./styles/skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { imageArray } from "./skillImageData";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="icon-set">
        {imageArray.map((img) => {
          return (
            <div className="icon">
              <img src={img} alt="skill-icon" className="skill-icon-image" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
