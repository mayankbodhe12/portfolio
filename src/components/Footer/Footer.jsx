import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css"; // Import the external CSS file

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-name">Mayank Bodhe</h2>

        <nav className="footer-nav">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="footer-link"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="footer-socials">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/Mayank Bodhe/",
            },
            {
              icon: <FaTwitter />,
              link: "https://twitter.com/@BodheMayank95599",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/mayank-bodhe-8025a0334",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/m_a_y_a_n_k_bodhe/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="footer-copy">© 2025 Mayank Bodhe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
