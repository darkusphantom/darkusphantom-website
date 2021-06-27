import React from "react";

import "./AboutMeIntro.css";

const AboutMeIntro = () => {
  return (
    <div className="aboutme__intro aboutme__content container-grid">
      <div className="aboutme__photo">
        <div className="container-img">
          <img
            className="container-img-item"
            src="https://i.imgur.com/SImAnNX.jpg"
            alt="Foto del Usuario"
          />
        </div>
        <p className="aboutme__phrase img__text">
          🌟 <i>Nunca te rindas y supera tus limites</i> 🌟
        </p>
      </div>
      <div className="info__programmer">
        <h3 className="aboutme__title">
          👨‍💻 FrontEnd
          <br />
          Developer
        </h3>
        <p className="aboutme__text">
          Creo proyectos personales como desarrollador; mejorando mis
          conocimientos, habilidades como programador y creación de
          herramientas.
        </p>
      </div>
      <div className="info__blogger">
        <h3 className="aboutme__title">✍️ Blogger</h3>
        <p className="aboutme__text">
          Escribo en un blog para compartir lo que aprendo, de desarrollo
          personal, tecnología o desarrollo web, para informar, aportar valor y
          motivar a otros.
        </p>
      </div>
    </div>
  );
};

export default AboutMeIntro;
