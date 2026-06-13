import React, { useState } from "react";
import { projects } from "../../constants";
import "./Work.css";

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
      <div className="work-header">
        <h2 className="work-heading">PROJECTS</h2>
        <div className="work-divider"></div>

        <p className="work-subtitle">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleOpenModal(project)}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
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
          <div className="modal-box">

            <div className="modal-close-row">
              <button
                className="modal-close-btn"
                onClick={handleCloseModal}
              >
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

              <div className="modal-content">

                <h3 className="modal-title">
                  {selectedProject.title}
                </h3>

                <p className="modal-description">
                  {selectedProject.description}
                </p>

                <div className="modal-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="modal-buttons">

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="code-button"
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-button"
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

