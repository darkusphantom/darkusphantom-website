import React from "react";

import SocialNetworks from "../../data/SocialNetworks";
import "./SocialNetworks.css";

function SocialNetwork() {
  return (
    <section className="socialNetwork">
      <h2 className="title-section">Contactos</h2>
      <div className="socialNetwork-container container-flex">
        {SocialNetworks.map((socialNetwork) => {
          const socialNetworkNameLowercase = socialNetwork.name.toLowerCase();
          const nameContact = `socialNetwork-${socialNetworkNameLowercase}`;

          return (
            <a
              href={socialNetwork.href}
              className="socialNetwork-item"
              key={socialNetwork.id}
            >
              <span id={nameContact} className="socialNetwork-name">
                {socialNetwork.name}
              </span>
              <div className="socialNetwork-img">
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

export default SocialNetwork;
