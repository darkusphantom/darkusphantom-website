import React from "react";

import "./css/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutme">
      <h2 className="title">About Me</h2>
      <p className="intro">
        👨‍💻 Programador FrontEnd, dedicado al mundo Tech 💙💻 mientras no para de
        aprender 🤓 y compartir su conocimiento con otros.
      </p>
      <div className="photo">
        <img src="https://i.imgur.com/SImAnNX.jpg" alt="Foto del Usuario" />
      </div>
      <p className="phrase">
        <i>Nunca te rindas y supera tus limites </i>💪🔥
      </p>
    </section>
  );
};

export default AboutMe;
