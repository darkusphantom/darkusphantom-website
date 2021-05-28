import React from "react";

import SocialNetworks from "../../data/SocialNetworks";
import "./SocialNetworks.css";

import SocialNetworkElements from "../SocialNetworkElements/SocialNetworkElements";
import ContactsMe from "../ContactsMe/ContactsMe";

function SocialNetwork() {
  return (
    <section className="section section__contacts">
      <h2 className="section__title">Contáctame</h2>
      <div className="contacts container-grid">
        <section className="contacts__socialNetwork container-flex">
          {SocialNetworks.map(({ id, name, icon, href }) => {
            return (
              <SocialNetworkElements
                key={id}
                name={name}
                icon={icon}
                href={href}
              />
            );
          })}
        </section>
        <ContactsMe />
      </div>
    </section>
  );
}

export default SocialNetwork;
