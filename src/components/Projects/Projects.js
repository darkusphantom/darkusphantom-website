import React from "react";

import "./Projects.css";
import CarouselProjects from "../CarouselProjects/CarouselProjects";

function Projects() {
  return (
    <section className="section__projects space-section">
      <h2 className="section__title">Proyectos Recientes</h2>
      <CarouselProjects />
    </section>
  );
}

export default Projects;
