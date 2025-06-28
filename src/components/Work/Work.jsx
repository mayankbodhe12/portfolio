import React, { useState } from "react";
import { projects } from "../../constants";
import "./Work.css"; // External styles

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="work" className="work-section">
      {/* Section Title */}
      <div className="work-title">
        <h2 className="work-heading">PROJECTS</h2>
        <div className="work-divider"></div>
        <p className="work-description">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="work-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="work-card"
          >
            <div className="work-card-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="work-card-image"
              />
            </div>
            <div className="work-card-content">
              <h3 className="work-card-title">{project.title}</h3>
              <p className="work-card-description">{project.description}</p>
              <div className="work-card-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="work-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-close">
              <button onClick={handleCloseModal} className="modal-close-button">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-image-wrapper">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>
              <div className="modal-details">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.description}</p>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="work-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="modal-links">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link-code"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link-live"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;

