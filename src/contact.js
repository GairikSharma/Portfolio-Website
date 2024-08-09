import React, { useState } from "react";
import "./styles/contact.css";
import { CgClose } from "react-icons/cg";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const show = () => {
    setShowModal(true);
  };

  const handleAlertBox = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch("https://send-mail-api-v1.vercel.app/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      handleAlertBox();
    }
  };

  return (
    <>
      {alert && (
        <div className="absolute top-5 right-3 z-10 alert w-[35%] h-[64px] bg-green-300 text-green-600 text-sm rounded-lg flex items-center justify-center">
          Message has been sent to Gairik 😃
        </div>
      )}

      <div className="contact-container">
        {showModal && (
          <div className="fixed top-0 bottom-0 right-0 left-0 w-full flex justify-center items-center">
            <div className="rounded-lg p-5 w-[85%] md:w-[70%] lg:w-[45%] bg-white">
              <CgClose
                className="text-2xl text-black bg-white cursor-pointer"
                onClick={() => setShowModal(false)}
              />
              <div className="bg-white w-[100%] m-auto">
                <div className="field bg-white">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900 bg-white mt-2 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    className="w-full bg-white pl-2 h-[44px] text-sm rounded-md border border-gray-500 shadow-md focus:border-blue-600 text-md placeholder:text-sm"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="field bg-white">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900 bg-white mt-2 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="w-full bg-white pl-2 h-[44px] text-sm rounded-md border border-gray-500 shadow-md focus:border-blue-600 placeholder:text-sm"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="field bg-white">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-gray-900 bg-white mt-2 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    rows={5}
                    className="w-full bg-white pl-2 text-sm rounded-md border border-gray-500 shadow-md focus:border-blue-600 placeholder:text-sm pt-2"
                    placeholder="Enter your message"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  className="mt-2 mb-1 w-[90px] h-[40px] text-[#0A192F] text-sm bg-white border border-[#0A192F] rounded-lg gap-2 flex justify-center items-center"
                  onClick={(e) => {
                    handleSubmit(e);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Submit
                  {loading && (
                    <div className="bg-white w-6 h-6 border-4 border-solid border-gray-200 border-t-[#0A192F] rounded-full animate-spin"></div>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
        <button className="get-in-touch" onClick={show}>
          Get In Touch
        </button>
      </div>
    </>
  );
}

export default Contact;
