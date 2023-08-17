import React from "react";
import "./styles/footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <>
      <div className="footer-container">
        {/* <div></div> */}
        <div className="social-media-links">
          <a href="#">
            <FiMail className="social-media-icons-footer" />
          </a>
          <a
            href="https://www.linkedin.com/in/gairik-sharma-1633b4223?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFDIXCFbTQhOJFcNumqDgDQ%3D%3D"
            target="blank"
          >
            <AiFillLinkedin className="social-media-icons-footer" />
          </a>
          <a href="https://github.com/GairikSharma/" target="blank">
            <BsGithub className="social-media-icons-footer" />
          </a>
          <a href="https://leetcode.com/gairik19/" target="blank">
            <SiLeetcode className="social-media-icons-footer" />
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/gairik19/"
            target="blank"
          >
            <SiGeeksforgeeks className="social-media-icons-footer" />
          </a>
        </div>
        {/* <div></div> */}
        <div className="dev-name">
          Developed and Designed by{" "}
          <span
            style={{ fontWeight: "600", color: "rgba(66, 233, 239, 0.891)" }}
          >
            Gairik Sharma
          </span>
        </div>
        
      </div>
    </>
  );
}

export default Footer;
