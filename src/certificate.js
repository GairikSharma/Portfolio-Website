import React, { useEffect } from 'react'
import './styles/certificate.css'
import Aos from 'aos';
import "aos/dist/aos.css";


function Certificate() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className="certificate-container" data-aos="fade-in">
                <div className="certificate">
                    <h3>Ethics Technology and Engineering</h3>
                    <button>VIEW</button>
                </div>
                <div className="certificate">
                    <h3>Version Controllwith Git</h3>
                    <button>VIEW</button>
                </div>
                <div className="certificate">
                    <h3>Networking and Security Architecture with VMware NSX</h3>
                    <button>VIEW</button>
                </div>
                <div className="certificate">
                    <h3>Introduction to AWS Identity and Access Management</h3>
                    <button>VIEW</button>
                </div>
            </div>
        </>
    )
}

export default Certificate