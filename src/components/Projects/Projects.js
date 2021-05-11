import React from "react";

import "./Projects.css";
import GroupProjects from "../../data/GroupProjects";

function Projects() {
  return (
    <section className="projects space-section">
      <div className="container-flex flex-column">
        <h2 className="title-section">Proyectos Recientes</h2>
        <div className="project-list">
          {GroupProjects.map(({ id, name, pageLink, cover, codeLink }) => {
            return (
              <div key={id} className="project-list-item">
                <figure className="project-img">
                  <img src={cover} alt="Project Imagen" />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

/*
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


*/
