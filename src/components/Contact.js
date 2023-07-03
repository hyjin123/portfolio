import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container" id="contact">
        <h2 className="contact-header">Contact Me</h2>
        <p>
          Feel free to contact me by submitting the form below and I will get
          back to you as soon as possible!
        </p>
        <form className="form-container">
          <div className="form-field">
            <label>Name</label>
            <textarea type="text" placeholder="Enter Your Name" />
          </div>

          <div className="form-field">
            <label>Email</label>
            <textarea type="text" placeholder="Enter Your Email" />
          </div>
          <div className="form-field message">
            <label>Message</label>
            <textarea type="text" placeholder="Enter Your Message" />
          </div>
          <button type="submit"> Submit</button>
        </form>
      </div>
      <svg
        className="contact-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,64L1440,160L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Contact;
