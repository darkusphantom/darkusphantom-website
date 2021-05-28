import React from "react";

import "./ProgrammingLanguaje.css";

const ProgrammingLanguaje = () => {
  const programmingLanguajes = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "Javascript",
    },
    {
      id: 4,
      name: "ReactJS",
    },
    {
      id: 5,
      name: "Webpack",
    },
    {
      id: 6,
      name: "NPM",
    },
  ];

  return (
    <div className="aboutme__programmingLanguaje container-grid">
      <h3 className="aboutme__title">Mis Herramientas</h3>
      {programmingLanguajes.map((languaje) => {
        return (
          <div className="box__programmingLanguaje" key={languaje.id}>
            <span className="programmingLanguaje">{languaje.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProgrammingLanguaje;
