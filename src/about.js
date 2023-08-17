import React, { useEffect } from "react";
import "./styles/about.css";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import coding from "./assets/coding.gif";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const cv =
    "https://drive.google.com/file/d/1NFdYOiZwXKMODa8DS10rKDRcHqb2c7o9/view?usp=drive_link";

  return (
    <>
      <div className="about-container" data-aos="fade-in">
        <div className="text-intro">
          <p className="heading">Hey , I am Gairik Sharma</p>
          <div className="headingtwo" style={{ height: "80px" }}>
            <Typewriter
              options={{
                strings: [
                  "I am a Electronics Engineer",
                  "I am a MERN stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="info">
            I am a third year student of{" "}
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "rgba(66, 233, 239, 0.891)",
              }}
            >
              Netaji Subhash Engineering College
            </span>{" "}
            in Electronics & Communication Engineering Department. Besides that
            I'm a{" "}
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "rgba(66, 233, 239, 0.891)",
              }}
            >
              MERN
            </span>{" "}
            stack developer. I like to learn new technologies.
          </div>
          <a>
            <button className="resume-btn">
              <a href={cv} target="blank">
                Resume
              </a>
            </button>
          </a>
        </div>
        <div className="profile">
          <img src={coding} className="profile-img" alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
