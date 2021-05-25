import React from "react";

import SocialNetworks from "../../data/SocialNetworks";
import "./SocialNetworks.css";

function SocialNetwork() {
  return (
    <section className="section section__contacts">
      <h2 className="title-section">Contáctame</h2>
      <div className="contacts container-grid">
        <section className="contacts__socialNetwork container-flex">
          {SocialNetworks.map((socialNetwork) => {
            const socialNetworkNameLowercase = socialNetwork.name.toLowerCase();
            const nameContact = `socialNetwork__${socialNetworkNameLowercase}`;

            return (
              <a
                href={socialNetwork.href}
                className="socialNetwork__item container-flex"
                key={socialNetwork.id}
              >
                <div className="socialNetwork__icon">{socialNetwork.icon}</div>
                <span id={nameContact} className="socialNetwork__name">
                  {socialNetwork.name}
                </span>
              </a>
            );
          })}
        </section>
        <section className="contacts__contactme container-grid">
          <h3 className="contacts__title">
            ¿Buscas a alguien con quien trabajar?
          </h3>
          <p className="contacts__text">
            Si buscas a alguien para colaborar, o practicar, en algun proyecto,
            las puertas están abiertas. <br />
            Con mucho gusto estaría encantado de trabajar contigo.
          </p>
          <a
            href="https://t.me/darkusphantomchannel"
            className="contacts__btn btn btn-primary"
          >
            👉 Contáctame aqui 👈
          </a>
          <div className="contacts__image container-img">
            <img
              className="container-img-item"
              src="https://i.imgur.com/mhUo1hK.png"
              alt="Meme indicando que Trabajemos en Equipo para colaborar con alguien o, trabajar en una empresa o startup"
            />
          </div>
        </section>
      </div>
    </section>
  );
}

export default SocialNetwork;
