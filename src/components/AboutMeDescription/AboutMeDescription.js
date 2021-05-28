import React from "react";

import "./AboutMeDescription.css";

const AboutMeDescription = () => {
  return (
    <div className="aboutme__content info__description container">
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
    </div>
  );
};

export default AboutMeDescription;
