import React from "react";

import SocialNetworks from "../data/SocialNetworks";
import "./css/Contacts.css";

function Contacts() {
  return (
    <section id="contacts">
      <h2 className="title">Contactos</h2>
      <div className="contacts-block">
        {SocialNetworks.map((socialNetwork) => {
          const socialNetworkNameLowercase = socialNetwork.name.toLowerCase();
          const nameContact = `contact-${socialNetworkNameLowercase}`;

          return (
            <a
              href={socialNetwork.href}
              className="contact"
              key={socialNetwork.id}
              target="_blank"
              rel="norefferer"
            >
              <span id={nameContact}>{socialNetwork.name}</span>
              <div className="contact-img">
                <img
                  className="not-active"
                  src={socialNetwork.src}
                  alt={socialNetwork.name}
                />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contacts;
