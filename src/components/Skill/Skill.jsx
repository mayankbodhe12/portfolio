import React from "react";
import { SkillsInfo } from "../../constants.js"; // Correct name
import Tilt from "react-parallax-tilt";
import "./Skill.css";

const Skill = () => (
  <section id="skills" className="skills-section">
    <div className="skills-title">
      <h2 className="skills-heading">SKILLS</h2>
      <div className="skills-divider"></div>
      <p className="skills-description">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    <div className="skills-grid">
      {SkillsInfo.map((category) => ( // Use lowercase here
        <div key={category.title} className="skills-category">
          <h3 className="skills-category-title">{category.title}</h3>

          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skills-item">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="skills-icon"
                  />
                  <span className="skills-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skill;
