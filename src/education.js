import React, { useState, useEffect } from 'react'
import './styles/education.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

  const [school, setSchool] = useState(true)
  const [schoolhs, setSchoolhs] = useState(false)
  const [grad, setGrad] = useState(false)

  const set_school = () => {
    setSchool(true)
    setSchoolhs(false)
    setGrad(false)
  }

  const set_schoolhs = () => {
    setSchool(false)
    setSchoolhs(true)
    setGrad(false)
  }

  const set_grad = () => {
    setSchool(false)
    setSchoolhs(false)
    setGrad(true)
  }
  return (
    <>

      <div className="main-education-container" data-aos="fade-in">
        <div className="education-container">

          <div className="education">
            <div className="education-sidemenu">
              <div className="school" onClick={set_school}>
                10th
              </div>
              <div className="school-HS" onClick={set_schoolhs}>
                10+2
              </div>
              <div className="grad" onClick={set_grad}>
                College
              </div>
            </div>
            <div className="inst">
              {
                school && (


                  "I have completed my 10th from Gangapuri Siksha Sadan under WBBSE in 2018 with 73%."


                )
              }
              {
                schoolhs && (


                  "I have completed my 10+2 from Gangapuri Siksha Sadan under WBCHSE in 2020 with 79%. "


                )
              }
              {
                grad && (


                  "Currently I'm persuing B.Tech in Electronics & Communication Engineering from Netaji Subhash Engineering College."


                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education