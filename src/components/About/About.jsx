import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.jpg";

import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side */}
        <div className="about-left">
          <h1 className="about-heading">Hi, I am</h1>
          <h2 className="about-name">Mayank Bodhe</h2>
          <h3 className="about-skills">
            <span>I am a </span>
            <ReactTypingEffect
              style={{ color: "#8245ec" }}
              text={["MERN Stack Developer", "UI/UX Designer", "Coder"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span style={{ color: "#8245ec" }}>{cursor}</span>
              )}
            />
          </h3>
          <p className="about-description">
            I am a MERN-stack developer. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions . I have completed my Data Structures and Algorithms course using Java.
          </p>
          <a
            href="https://1drv.ms/b/c/2c8f589163a86fe4/EVRE-J8DBfZOmWGrHvg0xXoBDkiN1lbwhxz-DOJ7EAw6Tg"
            target="_blank"
            rel="noopener noreferrer"
            className="about-button"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <Tilt
            className="profile-tilt"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Mayank Bodhe"
              className="profile-image"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
