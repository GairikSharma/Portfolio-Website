import React from 'react'
import './styles/footer.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

function Footer() {
    return (
        <>
            <div className="footer-container">
                {/* <div></div> */}
                <div className="social-media-links">
                    <a href="#">
                        <FiMail className="social-media-icons-footer" />
                    </a>
                    <a href="https://www.linkedin.com/in/gairik-sharma-1633b4223?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFDIXCFbTQhOJFcNumqDgDQ%3D%3D">
                        <AiFillLinkedin className="social-media-icons-footer" />
                    </a>
                    <a href="https://github.com/GairikSharma/">
                        <BsGithub className="social-media-icons-footer" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100057292104618">
                        <BsFacebook className="social-media-icons-footer" />
                    </a>
                    <a href="https://instagram.com/gairik_sharma?igshid=YmMyMTA2M2Y=">
                        <BsInstagram className="social-media-icons-footer" />
                    </a>
                    
                </div>
                {/* <div></div> */}
                <p className="dev-name">
                    Developed and Designed by <span style={{ fontWeight: "600", color: 'rgba(66, 233, 239, 0.891)' }}>Gairik Sharma</span> with React Js
                </p>
                <p className='dev-name' style={{textAlign: 'center'}}>Thank you for visiting my portfolio website, come and connect with me in social media.</p>
            </div>
        </>
    )
}

export default Footer