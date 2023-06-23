import React, {useEffect} from 'react'
import './styles/about.css'
import profile from './assets/profile.jpeg'
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className="about-container" data-aos="fade-in">
                <div className="text-intro" >
                    <p className='heading'>Hey , I am Gairik Sharma</p>
                    <div className='headingtwo' style={{height: "80px"}}>
                        <Typewriter
                            options={{
                                strings: ['I am a Electronics Engineering undergrad', 'I am a MERN stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className='info'>
                        I am a third year student of <span style={{ fontSize: '18px', fontWeight: '100', color: '#BFACE0' }}>Netaji Subhash Engineering College</span> in
                        Electronics & Communication Engineering Department. Besides that I'm a <span style={{ fontSize: '25px', fontWeight: '100', color: '#BFACE0' }}>MERN</span> stack developer.
                        I like to learn new technologies.
                    </div>

                </div>
                <div className="profile" >
                    <div className="profile-card">
                        <div className="prof-pic" style={{ backgroundImage: `url(${profile})` }}>
                            <div className="text">
                            </div>

                        </div>
                        {/* <img src={profile} className="prof-pic" /> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default About