import React from "react";

import "./Projects.css";
//import "./Slider.css";
//import GroupProjects from "../../data/GroupProjects";
//import img1 from "../../Assets/img/photo1.jpg";
import CarouselProjects from "../CarouselProjects/CarouselProjects";
//import Carousel from "../DemoCarouse/Carousel";

function Projects() {
  return (
    <section className="section__projects space-section">
      <h2 className="section__title">Proyectos Recientes</h2>
      <CarouselProjects />
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

/*
 
           {GroupProjects.map(({ id, name, pageLink, cover, codeLink }) => {
            return (
              <div key={id} className="project-list-item slider-items">
                <figure className="project-img item">
                  <img src={img1} alt="Project Imagen" />
                </figure>
              </div>
            );
          })}

 
 
 * */
