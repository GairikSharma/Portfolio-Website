import React, { useState, useEffect } from 'react'
import './styles/contact.css'
import {CgClose} from 'react-icons/cg'

function Contact() {
  
  const [showmodal, setShowmodal] = useState(false)
  const show = () => {
    setShowmodal(true)
  }
  return (
    <div className='contact-container'>
      {
        showmodal &&
        (
          <div className="modal-bg">
            <div className="modal-content">
              <CgClose className='close-icon-form' onClick={()=>{setShowmodal(false)}}/>
              <form>
                <h3>Contact Me</h3>
                <input type="text" placeholder='Enter Your Name'/>
                <input type="text" placeholder='Title'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Subject'></textarea>
                <button>Send</button>
              </form>
            </div>
          </div>
        )
      }
      <button className='get-in-touch' onClick={show}>Get In Touch</button>
    </div>
  )
}

export default Contact