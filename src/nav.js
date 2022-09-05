import React, { useRef, useState } from 'react'
import './styles/nav.css'
import { CgMenuRight } from 'react-icons/cg'
import { VscClose } from 'react-icons/vsc'
import { IoMdDownload } from 'react-icons/io'


function Nav() {
  const [sidemenu, setSidemenu] = useState(false)
  const sideMenu = () => {
    setSidemenu(true)
    console.log('Clicked');
  }
  const closeSidebar = () => {
    setSidemenu(false)
  }
  return (
    <>
      {
        sidemenu && (
          <div className="side-menu">
            <div className="close-icon-div">
              <VscClose className='close-icon' onClick={closeSidebar} />
            </div>
            <div className="side-menu-items">
              <ul>
                <li onClick={()=>{setSidemenu(false)}}>About</li>
                <li onClick={()=>{setSidemenu(false)}}>Education</li>
                <li onClick={()=>{setSidemenu(false)}}>Skills</li>
                <li onClick={()=>{setSidemenu(false)}}>Projects</li>
                <li onClick={()=>{setSidemenu(false)}}>Certifications</li>
                <li onClick={()=>{setSidemenu(false)}}>Contact</li>
              </ul>
              <button>Download CV
                    <IoMdDownload className='download-icon'/>
                    <a href="" download></a>
                </button>
            </div>
          </div>
        )
      }
      <div className="nav">
        <div className="logo">
          LOGO
        </div>
        <div className="menu-items">
          <ul>
            <li>About</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contact</li>
          </ul>

        </div>
        <div className='menu-items-toggle-btn'>
          <CgMenuRight className="menu-icon " onClick={sideMenu} />
        </div>

      </div>
    </>
  )
}

export default Nav