import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import { AppWrap, MotionWrap } from "../../wrapper";
// import { FaAngleUp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4mlykte",
        "template_czpo3ef",
        form.current,
        "LVxHzrIVGBx1VbJMT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact-section">
        <h2 className="title">
          <br />
          Have any questions? Get in touch.
        </h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="contact-form">
            <input
              id="input-name"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              type="email"
              id="input-email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="contact-form">
            <textarea
              placeholder="Your message"
              name="message"
              id="input-message"
              required
            />
          </div>
          <input
            type="submit"
            value="SEND"
            id="input-submit"
            onClick={() => {
              (document.getElementById("input-name").value !== "") &
                (document.getElementById("input-email").value !== "") &
                (document.getElementById("input-message").value !== "") &&
                alert(
                  "Thank you for your message! I will get back to you shortly."
                );
            }}
          />
        </form>
      </div>
      {/* <div className="top-to-btm">
        <div className="icon-position">
          <FaAngleUp
            className="icon-style"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div> */}
    </>
  );
};

export default AppWrap(MotionWrap(Contact, "contact"), "contact");
