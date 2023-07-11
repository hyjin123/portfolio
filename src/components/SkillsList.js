import React from "react";

function SkillsList({ skill }) {
  // must use lowercase for devicon classes
  const lowerCaseSkill = skill.toLowerCase();

  return (
    <div className="icons-child">
      {lowerCaseSkill === "express" ? (
        <i class={`devicon-${lowerCaseSkill}-original`}></i>
      ) : (
        <i class={`devicon-${lowerCaseSkill}-plain`}></i>
      )}
      <p className="icon-name">{skill}</p>
    </div>
  );
}

export default SkillsList;
