import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./Skills.css";
import SkillsList from "./SkillsList";

function Skills() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: {
      opacity: 1,
      scaleX: -1,
      rotate: 315,
      translateX: 0,
      transition: { type: "tween", duration: 1 },
    },
    hidden: { opacity: 1, scaleX: -1, rotate: 315, translateX: -130 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const skillsList = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Nodejs",
    "Express",
    "jQuery",
    "Bootstrap",
    "TailwindCSS",
    "PostgreSQL",
    "Firebase",
    "Git",
    "Github",
    "VSCode",
  ];

  const mappedList = skillsList.map((item) => <SkillsList skill={item} />);

  return (
    <>
      <div className="skills-container" id="skills">
        <motion.img
          ref={ref}
          className="skills-img2"
          src={require("./pics/flower7.png")}
          alt="sean-bitmoji"
          max-width="30%"
          animate={control}
          initial="hidden"
          variants={boxVariant}
        />
        <p className="skills-main-header">Skills</p>
        <h2 className="about-header">Things I can do!</h2>
        <p className="about-text">
          Technologies, skills, and tools I use to make amazing projects
        </p>
        <div className="icons">{mappedList}</div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#accdc6"
          fill-opacity="1"
          d="M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,117.3C672,107,768,149,864,144C960,139,1056,85,1152,58.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Skills;
