import React, { useEffect } from "react";
import "./styles/achievement.css";
import Aos from "aos";
import "aos/dist/aos.css";
import hacktoberfest from "./assets/hacktoberfest.png";
import googlecloud from "./assets/googlecloud.gif";
import h4btwo from "./assets/h4btwo.webp"

function Achievement() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="achievement-wrapper">

        <div className="a-card-google" data-aos="fade-in">
          <img src={googlecloud} className="card-img" alt="" />
          <div className="a-card-details-google">
            Participated in 30 days of Google Cloud
          </div>
        </div>

        <div className="a-card-others">

          <div className="a-card-hacktoberfest" data-aos="fade-in">
            <img src={hacktoberfest} className="card-img" alt="" />
            <div className="a-card-details-hacktoberfest">
              Participated in hacktoberfest 2022 and contributed on 5+ projects
            </div>
          </div>

          <div className="a-card-hack4bengal" data-aos="fade-in">
            <img src={h4btwo} className="card-img" alt="" />
            <div className="a-card-details-hack4bengal">
              Participated in hack4bengal 2.0
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Achievement;
