import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-header">Contact me</h2>
      <p>
        Feel free to contact me by submitting the form below and I will get back
        to you as soon as possible!
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

        <input type="submit" />
      </form>
    </div>
  );
}

export default Contact;
