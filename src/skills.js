import React, {useEffect} from 'react'
import './styles/skills.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function Skills() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className="skills-container" data-aos="fade-in">
                <div className="skill-name">
                    <h3>HTML ( 80% )</h3>
                    <div className="skill-percentage">
                        <div className="percentage" style={{ width: '80%', borderRadius: '50px', background: '#A084CA' }}></div>
                    </div>
                </div>

                <div className="skill-name">
                    <h3>CSS ( 75% )</h3>
                    <div className="skill-percentage">
                        <div className="percentage" style={{ width: '75%', borderRadius: '50px', background: '#A084CA' }}></div>
                    </div>
                </div>

                <div className="skill-name">
                    <h3>Bootstrap ( 70% )</h3>
                    <div className="skill-percentage">
                        <div className="percentage" style={{ width: '70%', borderRadius: '50px', background: '#A084CA' }}></div>
                    </div>
                </div>

                <div className="skill-name">
                    <h3>Javascript ( 70% )</h3>
                    <div className="skill-percentage">
                        <div className="percentage" style={{ width: '70%', borderRadius: '50px', background: '#A084CA' }}></div>
                    </div>
                </div>

                <div className="skill-name">
                    <h3>React Js ( 70% )</h3>
                    <div className="skill-percentage">
                        <div className="percentage" style={{ width: '70%', borderRadius: '50px', background: '#A084CA' }}></div>
                    </div>
                </div>

                <div className="skill-name">
                    <h3>Node Js ( 65% )</h3>
                    <div className="skill-percentage">
                        <div className="percentage" style={{ width: '65%', borderRadius: '50px', background: '#A084CA' }}></div>
                    </div>
                </div>

                <div className="skill-name">
                    <h3>Express Js ( 65% )</h3>
                    <div className="skill-percentage">
                        <div className="percentage" style={{ width: '65%', borderRadius: '50px', background: '#A084CA' }}></div>
                    </div>
                </div>

                <div className="skill-name">
                    <h3>MongoDb ( 60% )</h3>
                    <div className="skill-percentage">
                        <div className="percentage" style={{ width: '60%', borderRadius: '50px', background: '#A084CA' }}></div>
                    </div>
                </div>

                <div className="skill-name">
                    <h3>Redux ( 45% )</h3>
                    <div className="skill-percentage">
                        <div className="percentage" style={{ width: '40%', borderRadius: '50px', background: '#A084CA' }}></div>
                    </div>
                </div>

                <div className="skill-name">
                    <h3>C ( 70% )</h3>
                    <div className="skill-percentage">
                        <div className="percentage" style={{ width: '70%', borderRadius: '50px', background: '#A084CA' }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills