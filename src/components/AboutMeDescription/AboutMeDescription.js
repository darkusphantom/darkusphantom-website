import React from "react";

import "./AboutMeDescription.css";

const AboutMeDescription = () => {
  return (
    <div className="aboutme__content info__description container-grid">
      <p className="aboutme__text aboutme__text__description">
        Me fascina la tecnología y todo lo referente a la misma. Me gusta estar
        en constante aprendizaje, saber cómo funcionan las cosas y el por qué.
        <br />
        Busco ayudar a otros creando contenido y escribiendo acerca de
        tecnología, desarrollo web y desarrollo personal en mi{" "}
        <strong>Marca Personal</strong>.
      </p>
      <p className="aboutme__text aboutme__text__description">
        En cada objetivo que me propongo, busco superarme. Quiero sacar la mejor
        version mi, tanto a nivel personal como profesional, y alcanzar mis
        metas mientras impulso, inspiro y motivo, a otros, con lo que aprendo y
        mis experiencias.
      </p>
      <div className="container-img aboutme__img">
        <img
          className="container-img-item"
          src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbmFsJTIwZ3Jvd3RofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Persona sentada utilizando una laptop"
        />
      </div>
    </div>
  );
};

export default AboutMeDescription;
