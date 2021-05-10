import React from "react";

import "./css/Projects.css";
import ListProjects from "../data/ListProjects";

function Projects() {
  return (
    <section id="projects">
      <h2 className="title">Proyectos Recientes</h2>
      <div className="project-list">
        {ListProjects.map(
          ({ id, name, projectPage, projectCover, projectCodeLink }) => {
            return (
              <div key={id} className="project">
                <figure className="project-img">
                  <img src={projectCover} alt="Project Imagen" />
                </figure>
              </div>
            );
          }
        )}
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
