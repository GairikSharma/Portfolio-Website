import React from "react";

function Progress() {
  return (
    <>
      <div className="skill_container">
        <div className="singleSkill">
          <div
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": 90 }}
          ></div>
          <p style={{color: "white"}}>HTML</p>
        </div>

        <div className="singleSkill">
          <div
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": 90 }}
          ></div>
          <p style={{color: "white"}}>CSS</p>
        </div>

        <div className="singleSkill">
          <div
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": 80 }}
          ></div>
          <p style={{color: "white"}}>Js</p>
        </div>

        <div className="singleSkill">
          <div
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": 80 }}
          ></div>
          <p style={{color: "white"}}>React Js</p>
        </div>


        <div className="singleSkill">
          <div
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": 80 }}
          ></div>
          <p style={{color: "white"}}>Chakra Ui</p>
        </div>

        <div className="singleSkill">
          <div
            role="progressbar"
            aria-valuenow="76"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": 76 }}
          ></div>
          <p style={{color: "white"}}>Tailwind</p>
        </div>

        <div className="singleSkill">
          <div
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": 80 }}
          ></div>
          <p style={{color: "white"}}>Firebase</p>
        </div>

        <div className="singleSkill">
          <div
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": 70 }}
          ></div>
          <p style={{color: "white"}}>Node Js</p>
        </div>

        <div className="singleSkill">
          <div
            role="progressbar"
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": 65 }}
          ></div>
          <p style={{color: "white"}}>Express Js</p>
        </div>

        <div className="singleSkill">
          <div
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": 80 }}
          ></div>
          <p style={{color: "white"}}>MongoDb</p>
        </div>

        <div className="singleSkill">
          <div
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": 85 }}
          ></div>
          <p style={{color: "white"}}>Git&GitHub</p>
        </div>

      </div>
    </>
  );
}

export default Progress;
