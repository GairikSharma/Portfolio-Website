import React, { useState, useEffect } from "react";
import "./styles/contact.css";
import { CgClose } from "react-icons/cg";

function Contact() {
  const [showmodal, setShowmodal] = useState(false);
  const show = () => {
    setShowmodal(true);
  };
  return (
    <div className="contact-container">
      {showmodal && (
        <div className="modal-bg">
          <div className="modal-content wave-group">
            <CgClose
              className="close-icon-form"
              onClick={() => {
                setShowmodal(false);
              }}
            />
            <form
              action="https://getform.io/f/2db56d14-5b80-43c7-9ff8-bb0724947411"
              method="POST"
            >
              <h3>Contact Me</h3>
              <input type="text" name="name" placeholder="Enter Your Name" />
              <input type="text" name="title" placeholder="Title" />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Subject"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
      <button className="get-in-touch" onClick={show}>
        Get In Touch
      </button>
    </div>
  );
}

export default Contact;
