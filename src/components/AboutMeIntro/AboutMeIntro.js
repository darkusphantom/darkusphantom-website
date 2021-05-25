import React, { Fragment } from "react";

import "./AboutMeIntro.css";

const AboutMeIntro = () => {
  return (
    <Fragment>
      <div className="aboutme__content aboutme__photo container-img">
        <img
          className="container-img-item"
          src="https://i.imgur.com/SImAnNX.jpg"
          alt="Foto del Usuario"
        />
      </div>
      <div className="aboutme__content info__programmer">
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
      <div className="aboutme__content info__blogger">
        <h3 className="aboutme__title">✍️ Blogger</h3>
        <p className="aboutme__text">
          Escribo en un blog para compartir lo que aprendo, de desarrollo
          personal, tecnología o desarrollo web, para informar, aportar valor y
          motivar a otros.
        </p>
      </div>
      <div className="aboutme__content info__phrase">
        <p>
          🌟 <i>Nunca te rindas y supera tus limites</i> 🌟
        </p>
      </div>
    </Fragment>
  );
};

export default AboutMeIntro;
