import React from "react";

import "./SocialNetworkElements.css";

const SocialNetworkElements = ({ name, icon, href }) => {
  const socialNetworkNameLowercase = name.toLowerCase();
  const nameContact = `socialNetwork__${socialNetworkNameLowercase}`;

  return (
    <a href={href} className="socialNetwork__item container-flex">
      <div className="socialNetwork__icon">{icon}</div>
      <span id={nameContact} className="socialNetwork__name">
        {name}
      </span>
    </a>
  );
};

export default SocialNetworkElements;
