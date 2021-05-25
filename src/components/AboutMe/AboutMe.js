import React from "react";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="section section__aboutme space-section">
      <h2 className="section__title">Acerca de Mi</h2>
      <div className="aboutme container-grid">
        <div className="aboutme__content aboutme__photo container-img">
          <img
            className="container__img__item"
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
            personal, tecnología o desarrollo web, para informar, aportar valor
            y motivar a otros.
          </p>
        </div>
        <div className="aboutme__content info__phrase">
          <p>
            🌟 <i>Nunca te rindas y supera tus limites</i> 🌟
          </p>
        </div>
      </div>
      <div class="container">
        <div class="aboutme__content info__description">
          <p>
            Me fascina la tecnología y todo lo referente a la misma. Me gusta
            estar en constante aprendizaje, saber cómo funcionan las cosas y el
            por qué. Busco ayudar a otros creando contenido y escribiendo acerca
            de tecnología, desarrollo web y desarrollo personal en mi{" "}
            <strong>Marca Personal</strong>.<br /> En cada objetivo que me
            propongo, busco superarme. Quiero sacar la mejor version mi, tanto a
            nivel personal como profesional, y alcanzar mis metas mientras
            impulso, inspiro y motivo, a otros, con lo que aprendo y mis
            experiencias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
