import React from "react";
import { education } from "../../constants";
import "./Education.css"; // Import external CSS file

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-title">
        <h2>EDUCATION</h2>
        <div className="underline"></div>
        <p>
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      <div className="education-timeline">
        <div className="timeline-line"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`education-entry ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            {/* <div className="timeline-circle">
              <img src={edu.img} alt={edu.school} />
            </div> */}

            <div className="education-card">
              <div className="card-header">
                <div className="school-logo">
                <img src={edu.img} alt={edu.school} />
                </div>
                <div className="school-info">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <p className="date">{edu.date}</p>
                </div>
              </div>
              <p className="grade">Grade: {edu.grade}</p>
              <p className="description">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

