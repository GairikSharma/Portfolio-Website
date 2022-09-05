import React, { useEffect } from 'react'
import './styles/achievement.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function Achievement() {
  useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
  return (
    <>
        <div className="achievement-container" data-aos="fade-in">
            <p>I have participated in 30 days of Google Cloud program in 2021 and completed all the tracks. <a href="https://www.cloudskillsboost.google/public_profiles/7f2ac6b7-5d5c-4925-94fd-4b4f33376787">View details</a></p>
            <p>I have participated Google Cloud facilitator program 2022 and completed one track out of 4 tracks. <a href="https://www.cloudskillsboost.google/public_profiles/2553feea-9687-463b-8e86-1a2b1dc47936">View details</a></p>
        </div>
    </>
  )
}

export default Achievement