import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import OtherSkills from "./OtherSkills";

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <OtherSkills />
      </div>
    </div>
  );
};

export default Skills;
