import React from "react";

import SocialNetworks from "../../data/SocialNetworks";
import "./SocialNetworks.css";
import WorkInGroupImg from "../../Assets/img/TrabajoEnEquipo.png";

function SocialNetwork() {
  return (
    <section className="section section__contacts">
      <h2 className="title-section">Redes Sociales</h2>
      <div className="contacts container-grid">
        <section className="contacts__socialNetwork container-flex">
          {SocialNetworks.map((socialNetwork) => {
            const socialNetworkNameLowercase = socialNetwork.name.toLowerCase();
            const nameContact = `socialNetwork__${socialNetworkNameLowercase}`;

            return (
              <a
                href={socialNetwork.href}
                className="socialNetwork__item"
                key={socialNetwork.id}
              >
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
              src={WorkInGroupImg}
              alt="Trabajemos en Equipo"
            />
          </div>
        </section>
        <section className="contacts__blog container-grid">
          <h3 className="contacts__title">Pásate por mi Blog</h3>
          <p className="contacts__text">
            Si quieres leer acerca de tecnología, programación, desarrollo web,
            criptomonedas; y todo lo referente a la misma, pásate por mi blog.
            De seguro encontrarás contenido de utilidad y valor.{" "}
          </p>
          <a
            href="https://darkusphantomblog.wordpress.com/"
            className="contacts__btn btn btn-primary"
          >
            👉 Entra a mi blog aqui 👈
          </a>
        </section>
      </div>
    </section>
  );
}

export default SocialNetwork;
