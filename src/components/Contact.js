import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./Contact.css";

function Contact() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: {
      opacity: 1,
      scaleX: -1,
      rotate: 310,
      translateX: 0,
      transition: { type: "tween", duration: 1 },
    },
    hidden: { opacity: 1, scaleX: -1, rotate: 310, translateX: -130 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <div className="contact-container" id="contact">
        <motion.img
          ref={ref}
          animate={control}
          initial="hidden"
          variants={boxVariant}
          className="contact-img"
          src={require("./pics/flower8.png")}
          alt="sean-bitmoji"
          max-width="30%"
        />
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
          <button className="contact-button" type="submit">
            Submit
          </button>
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
