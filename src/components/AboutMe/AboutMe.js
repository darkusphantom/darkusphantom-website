import React from "react";

import "./AboutMe.css";
import AboutMeIntro from "../AboutMeIntro/AboutMeIntro";
import AboutMeDescription from "../AboutMeDescription/AboutMeDescription";
import ProgrammingLanguaje from "../ProgrammingLanguaje/ProgrammingLanguaje";

const AboutMe = () => {
  return (
    <section className="section section__aboutme space-section">
      <h2 className="section__title">Acerca de Mi</h2>
      <div className="container">
        <div className="aboutme container-grid">
          <AboutMeIntro />
        </div>
        <AboutMeDescription />
        <ProgrammingLanguaje />
      </div>
    </section>
  );
};

export default AboutMe;
