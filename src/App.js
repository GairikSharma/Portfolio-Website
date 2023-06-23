import React, { useState, useRef } from "react";
import "./App.css";
import About from "./about";
import Education from "./education";
import Projects from "./projects";
import Skills from "./skills";
import Certificate from "./certificate";
import Achievement from "./achievement";
import Contact from "./contact";
import { FiMail } from "react-icons/fi";
// import GairkSharma_cv from './pdf/GairikSharma_cv.pdf'

import "./styles/nav.css";
import { CgMenuRight } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import { IoMdDownload } from "react-icons/io";

import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Footer from "./footer";
import ExperienceCard from "./experience";
import Swiper from "swiper";
import SwiperElement from "./swiper";

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
  const certificateref = useRef();
  const achivementref = useRef();
  const contactref = useRef();

  const scrollComponent = (elem) => {
    elem.current.scrollIntoView({ behavior: "smooth" });
    console.log(elem.current);
  };

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
              <li
                onClick={() => {
                  setSidemenu(false);
                  scrollComponent(certificateref);
                }}
              >
                Certifications
              </li>
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
            <button>
              Download CV
              <a href="#" style={{ background: "transparent" }}>
                <IoMdDownload className="download-icon" />
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
            <li
              onClick={() => {
                scrollComponent(certificateref);
              }}
            >
              Certifications
            </li>
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
        <a href="gairiksharma2000@gmail.com">
          <FiMail className="social-media-icons" />
        </a>
        <a href="https://www.linkedin.com/in/gairik-sharma-1633b4223?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFDIXCFbTQhOJFcNumqDgDQ%3D%3D">
          <AiFillLinkedin className="social-media-icons" />
        </a>
        <a href="https://github.com/GairikSharma/">
          <BsGithub className="social-media-icons" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100057292104618">
          <BsFacebook className="social-media-icons" />
        </a>
        <a href="https://instagram.com/gairik_sharma?igshid=YmMyMTA2M2Y=">
          <BsInstagram className="social-media-icons" />
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
      <Projects />
      <div className="skills" ref={achivementref}>
        <div></div>
        <h1>Achivements</h1>
        <div></div>
      </div>
      <Achievement />
      <div className="skills" ref={certificateref}>
        <div></div>
        <h1>Certifications</h1>
        <div></div>
      </div>
      <Certificate />
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
