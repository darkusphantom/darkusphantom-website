import React from "react";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutme space-section">
      <h2 className="title-section">Acerca de Mi</h2>
      <div className="container-grid">
        <div className="section-content aboutme-photo container-img">
          <img
            className="container-img-item"
            src="https://i.imgur.com/SImAnNX.jpg"
            alt="Foto del Usuario"
          />
        </div>
        <div className="section-content info-programmer">
          <h3>
            👨‍💻 FrontEnd
            <br />
            Developer
          </h3>
          <p>
            Creo proyectos personales como desarrollador; mejorando mis
            conocimientos, habilidades como programador y creación de
            herramientas.
          </p>
        </div>
        <div className="section-content info-blogger">
          <h3>✍️ Blogger</h3>
          <p>
            Escribo en un blog para compartir lo que aprendo, de desarrollo
            personal, tecnología o desarrollo web, para informar, aportar valor
            y motivar a otros.
          </p>
        </div>
        <div className="section-content info-phrase">
          <p>
            🌟 <i>Nunca te rindas y supera tus limites</i> 🌟
          </p>
        </div>
      </div>
      <div class="container">
        <div class="section-content info-description">
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
