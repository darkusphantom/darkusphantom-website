import React from "react";

import SocialNetworks from "../../data/SocialNetworks";
import "./SocialNetworks.css";

function SocialNetwork() {
  return (
    <section className="socialNetwork">
      <h2 className="title-section">Redes Sociales</h2>
      <div className="container-flex">
        {SocialNetworks.map((socialNetwork) => {
          const socialNetworkNameLowercase = socialNetwork.name.toLowerCase();
          const nameContact = `socialNetwork-${socialNetworkNameLowercase}`;

          return (
            <a
              href={socialNetwork.href}
              className="socialNetwork-item"
              key={socialNetwork.id}
            >
              <img
                className="socialNetwork-img container-img-item not-active"
                src={socialNetwork.src}
                alt={socialNetwork.name}
              />
              <span id={nameContact} className="socialNetwork-name">
                {socialNetwork.name}
              </span>
            </a>
          );
        })}
      </div>
      <div className="container">
        <h3>¿Buscas a alguien con quien trabajar?</h3>
        <p>
          Si buscas a alguien para colaborar, o practicar, en algun proyecto,
          las puertas están abiertas. <br />
          Con mucho gusto estaría encantado de trabajar contigo.
        </p>
        <a href="https://t.me/darkusphantomchannel" className="btn btn-primary">
          👉 Contáctame aqui 👈
        </a>
      </div>
      <div className="container">
        <h3>Pásate por mi Blog</h3>
        <p>
          Si quieres leer acerca de tecnología, programción, desarrollo web,
          criptomonedas; y todo lo referente a la misma, pásate por mi blog. De
          seguro encontrarás contenido de utilidad y valor.{" "}
        </p>
        <a
          href="https://darkusphantomblog.wordpress.com/"
          className="btn btn-primary"
        >
          👉 Entra a mi blog aqui 👈
        </a>
      </div>
    </section>
  );
}

export default SocialNetwork;
