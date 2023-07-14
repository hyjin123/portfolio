import React from "react";
import { motion, useAnimation } from "framer-motion";

function SkillsList({ skill }) {
  // must use lowercase for devicon classes
  const lowerCaseSkill = skill.toLowerCase();

  return (
    <motion.div
      className="icons-child"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.6 }}
    >
      {lowerCaseSkill === "express" ? (
        <i class={`devicon-${lowerCaseSkill}-original`}></i>
      ) : (
        <i class={`devicon-${lowerCaseSkill}-plain`}></i>
      )}
      <p className="icon-name">{skill}</p>
    </motion.div>
  );
}

export default SkillsList;
