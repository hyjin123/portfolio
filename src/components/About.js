import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./About.css";

function About() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: {
      opacity: 1,
      scaleX: -1,
      rotate: 330,
      translateX: 0,
      transition: { type: "tween", duration: 1 },
    },
    hidden: { opacity: 1, scaleX: -1, rotate: 330, translateX: -130 },
  };

  const boxVariant2 = {
    visible: {
      opacity: 1,
      scaleX: -1,
      rotate: 30,
      translateX: 0,
      transition: { type: "tween", duration: 1 },
    },
    hidden: { opacity: 1, scaleX: -1, rotate: 30, translateX: 130 },
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
      <div className="about-main-container" id="about">
        <div className="about-container">
          <motion.img
            ref={ref}
            animate={control}
            initial="hidden"
            variants={boxVariant}
            className="about-img"
            src={require("./flower1.png")}
            alt="sean-bitmoji"
          />
          <motion.img
            ref={ref}
            animate={control}
            initial="hidden"
            variants={boxVariant2}
            className="about-img2"
            src={require("./flower-test-1.png")}
            alt="sean-bitmoji"
          />
          <p className="about-main-header">About</p>
          <h2 className="about-header">Who is Sean?</h2>

          <p className="about-header-text">
            Curiosity-driven Full Stack Web Developer with passion for building
            things.
          </p>

          <p className="about-text">
            I have a BASc in Chemical Engineering from University of Waterloo 🇨🇦
            and a Full Stack Web Development Certificate from Lighthouse Labs,
            Inc.
          </p>
          <p className="about-text">
            I also have 2 years of experience working as an engineer and 4 years
            of experience working as a Customer Renewals Specialist.
          </p>
          <p className="about-text">
            After many years of working, I realized I wanted to become a
            programmer because of my passion for problem solving and building
            passion projects. I am the happiest when I am building, learning and
            coding things that I am passionate about.
          </p>
          <button className="contact-button" type="submit">
            Contact me!
          </button>
        </div>
      </div>
      <svg
        className="about-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,96L288,288L576,96L864,128L1152,192L1440,64L1440,0L1152,0L864,0L576,0L288,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default About;
