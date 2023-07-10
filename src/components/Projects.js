import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./Projects.css";

function Projects() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: {
      opacity: 1,
      scaleX: -1,
      rotate: 40,
      translateX: 0,
      transition: { delay: 0.5 },
    },
    hidden: { opacity: 1, scaleX: -1, rotate: 40, translateX: 130 },
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
      <div className="projects-container" id="projects">
        <motion.img
          ref={ref}
          className="project-img"
          src={require("./flower2.png")}
          alt="sean-bitmoji"
          max-width="30%"
          animate={control}
          initial="hidden"
          variants={boxVariant}
        />
        <h2 className="projects-header">List of Projects</h2>
        <p>These are my projects</p>
      </div>

      <svg
        className="project-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#eae7dc"
          fill-opacity="1"
          d="M0,160L480,288L960,96L1440,256L1440,0L960,0L480,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Projects;
