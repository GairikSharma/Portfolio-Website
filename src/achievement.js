import React, { useEffect } from "react";
import "./styles/achievement.css";
import Aos from "aos";
import "aos/dist/aos.css";
import hacktoberfest from "./assets/hacktoberfest.png";
import googlecloud from "./assets/googlecloud.gif";
import h4btwo from "./assets/h4btwo.webp"

function Achievement() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <div className="achievement-container" data-aos="fade-in">
            <p>I have participated in 30 days of Google Cloud program in 2021 and completed all the tracks. <a href="https://www.cloudskillsboost.google/public_profiles/7f2ac6b7-5d5c-4925-94fd-4b4f33376787">View details</a></p>
            <p>I have participated Google Cloud facilitator program 2022 and completed one track out of 4 tracks. <a href="https://www.cloudskillsboost.google/public_profiles/2553feea-9687-463b-8e86-1a2b1dc47936">View details</a></p>
        </div> */}
      <div className="achievement-wrapper">

        <div className="a-card-google">
          <img src={googlecloud} className="card-img" alt="" />
          <div className="a-card-details-google">
            Participated in 30 days of Google Cloud
          </div>
        </div>

        <div className="a-card-others">

          <div className="a-card-hacktoberfest">
            <img src={hacktoberfest} className="card-img" alt="" />
            <div className="a-card-details-hacktoberfest">
              Participated in hacktoberfest 2022 and contributed on 5+ projects
            </div>
          </div>

          <div className="a-card-hack4bengal">
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
