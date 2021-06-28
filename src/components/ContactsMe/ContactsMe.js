import React from "react";

import "./ContactsMe.css";

const ContactsMe = () => {
  return (
    <section className="contacts__contactme container-grid">
      <h3 className="title title-bg title-skrew">
        ¿Buscas a alguien con quien trabajar?
      </h3>
      <p className="text">
        Si buscas a alguien para colaborar, o practicar, en algun proyecto, las
        puertas están abiertas. <br />
        Con mucho gusto estaría encantado de trabajar contigo.
      </p>
      <a
        href="https://t.me/darkusphantomchannel"
        className="contacts__btn btn btn-primary"
      >
        👉 Contáctame 👈
      </a>
      <div className="contacts__image container-img">
        <img
          className="container-img-item"
          src="https://i.imgur.com/mhUo1hK.png"
          alt="Meme indicando que Trabajemos en Equipo para colaborar con alguien o, trabajar en una empresa o startup"
        />
      </div>
    </section>
  );
};

export default ContactsMe;
