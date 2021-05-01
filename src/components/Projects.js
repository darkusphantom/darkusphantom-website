import React from "react";

import "./css/Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2 className="title">Proyectos Recientes</h2>
      <div className="project-list">
        <a
          href="https://darkusphantom.github.io/CSS-Grid-Layout/"
          className="project"
        >
          <figure className="project-img">
            <img src="https://i.imgur.com/tr5fGmE.jpg" alt="" />
          </figure>
          <span className="project-overlay">
            <p>
              <span className="project-title">Platzi Video</span>
            </p>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Projects;
