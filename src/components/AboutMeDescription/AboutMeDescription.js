import React from "react";

import "./AboutMeDescription.css";

const AboutMeDescription = () => {
  return (
    <div className="aboutme__content info__description container-flex">
      <p className="aboutme__description">
        Estoy en constante aprendizaje 🧠 y crecimiento 📈, creo retos 🔥,
        aprovechando cada oportunidad para seguir mejorando 🙌✨.
      </p>
      <div className="aboutme__img">
        <div className="container-img">
          <img
            className="container-img-item"
            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbmFsJTIwZ3Jvd3RofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Persona sentada utilizando una laptop"
            width="600"
            height="350"
          />
        </div>
        <p className="text img__text">En cada objetivo, busco superarme 👊</p>
      </div>
    </div>
  );
};

export default AboutMeDescription;

/* TODO
Me fascina la tecnología y todo lo referente a la misma.
      <p className="text aboutme__text__description">
        En cada objetivo que me propongo, busco superarme. Quiero sacar la mejor
        version mi, tanto a nivel personal como profesional, y alcanzar mis
        metas mientras impulso, inspiro y motivo, a otros, con lo que aprendo y
        mis experiencias.
      </p>
        Busco ayudar a otros creando contenido y escribiendo acerca de
        tecnología, desarrollo web y desarrollo personal en mi{" "}
        <strong>Marca Personal</strong>.

*/
