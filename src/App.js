import React, { useState, useRef } from "react";
import "./App.css";
import "./index.css"
import About from "./about";
import Education from "./education";
import Projects from "./projects";
import Achievement from "./achievement";
import Contact from "./contact";
import { FiMail } from "react-icons/fi";

import "./styles/nav.css";
import { CgMenuRight } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import Footer from "./footer";
import ExperienceCard from "./experience";
import Skills from "./skills";


function App() {
  const [sidemenu, setSidemenu] = useState(false);
  const sideMenu = () => {
    setSidemenu(true);
    console.log("Clicked");
  };
  const closeSidebar = () => {
    setSidemenu(false);
  };

  const aboutref = useRef();
  const educationref = useRef();
  const experienceref = useRef();
  const skillsref = useRef();
  const projectsref = useRef();
  // const certificateref = useRef();
  const achivementref = useRef();
  const contactref = useRef();

  const scrollComponent = (elem) => {
    elem.current.scrollIntoView({ behavior: "smooth" });
  };
  const cv =
    "https://drive.google.com/file/d/1NFdYOiZwXKMODa8DS10rKDRcHqb2c7o9/view?usp=drive_link";

  return (
    <div className="App">
      {sidemenu && (
        <div className="side-menu">
          <div className="close-icon-div">
            <VscClose className="close-icon" onClick={closeSidebar} />
          </div>
          <div className="side-menu-items">
            <ul>
              <li
                onClick={() => {
                  setSidemenu(false);
                  scrollComponent(aboutref);
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  setSidemenu(false);
                  scrollComponent(educationref);
                }}
              >
                Education
              </li>
              <li
                onClick={() => {
                  setSidemenu(false);
                  scrollComponent(experienceref);
                }}
              >
                Experience
              </li>
              <li
                onClick={() => {
                  setSidemenu(false);
                  scrollComponent(skillsref);
                }}
              >
                Skills
              </li>
              <li
                onClick={() => {
                  setSidemenu(false);
                  scrollComponent(projectsref);
                }}
              >
                Projects
              </li>
              {/* <li
                onClick={() => {
                  setSidemenu(false);
                  scrollComponent(certificateref);
                }}
              >
                Certifications
              </li> */}
              <li
                onClick={() => {
                  setSidemenu(false);
                  scrollComponent(achivementref);
                }}
              >
                Achievements
              </li>
              <li
                onClick={() => {
                  setSidemenu(false);
                  scrollComponent(contactref);
                }}
              >
                Contact
              </li>
            </ul>
            <button className="resume-btn">
              <a href={cv} target="blank">
                Resume
              </a>
            </button>
          </div>
        </div>
      )}
      <div className="nav">
        <div className="logo">G_s</div>
        <div className="menu-items">
          <ul>
            <li
              onClick={() => {
                scrollComponent(aboutref);
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                scrollComponent(educationref);
              }}
            >
              Education
            </li>
            <li
              onClick={() => {
                scrollComponent(experienceref);
              }}
            >
              Experience
            </li>
            <li
              onClick={() => {
                scrollComponent(skillsref);
              }}
            >
              Skills
            </li>
            <li
              onClick={() => {
                scrollComponent(projectsref);
              }}
            >
              Projects
            </li>
            {/* <li
              onClick={() => {
                scrollComponent(certificateref);
              }}
            >
              Certifications
            </li> */}
            <li
              onClick={() => {
                scrollComponent(achivementref);
              }}
            >
              Achievement
            </li>
            <li
              onClick={() => {
                scrollComponent(contactref);
              }}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="menu-items-toggle-btn">
          <CgMenuRight className="menu-icon " onClick={sideMenu} />
        </div>
      </div>

      <div className="social-media">
        <div></div>
        <a href="gairiksharma2000@gmail.com">
          <FiMail className="social-media-icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/gairik-sharma-1633b4223?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFDIXCFbTQhOJFcNumqDgDQ%3D%3D"
          target="blank"
        >
          <AiFillLinkedin className="social-media-icons" />
        </a>
        <a href="https://github.com/GairikSharma/" target="blank">
          <BsGithub className="social-media-icons" />
        </a>
        <a href="https://leetcode.com/gairik19/" target="blank">
          <SiLeetcode className="social-media-icons" />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/gairik19/" target="blank">
          <SiGeeksforgeeks className="social-media-icons" />
        </a>

        <div></div>
      </div>
      {/* <Nav /> */}
      <div className="edu" ref={aboutref}>
        <div></div>
        <h1>About</h1>
        <div></div>
      </div>
      <About />
      <div className="edu" ref={educationref}>
        <div></div>
        <h1>Education</h1>
        <div></div>
      </div>
      <Education />
      <div className="edu" ref={experienceref}>
        <div></div>
        <h1>Experience</h1>
        <div></div>
      </div>
      <div className="exp-card-wrapper">
        <ExperienceCard />
      </div>
      <div className="skills" ref={skillsref}>
        <div></div>
        <h1>Skills</h1>
        <div></div>
      </div>
      <Skills />
      <div className="skills" ref={projectsref}>
        <div></div>
        <h1>Projects</h1>
        <div></div>
      </div>
      {/* here project section  */}
      <Projects />
      <div className="skills" ref={achivementref}>
        <div></div>
        <h1>Achivements</h1>
        <div></div>
      </div>
      <Achievement />
      {/* <div className="skills" ref={certificateref}>
        <div></div>
        <h1>Certifications</h1>
        <div></div>
      </div>
      <Certificate /> */}
      <div className="skills" ref={contactref}>
        <div></div>
        <h1>Contact</h1>
        <div></div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
