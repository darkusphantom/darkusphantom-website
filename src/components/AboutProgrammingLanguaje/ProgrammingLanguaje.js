import React from "react";

import "./ProgrammingLanguaje.css";
import ProgrammingLanguajes from "../../data/ProgrammingLanguajes";

const ProgrammingLanguaje = () => {
  return (
    <div className="aboutme__programmingLanguaje aboutme__content container-grid">
      <h3 className="title title-bg title-skrew">Mis Herramientas</h3>
      {ProgrammingLanguajes.map((languaje) => {
        return (
          <div className="box__programmingLanguaje tossing" key={languaje.id}>
            <span className="programmingLanguaje">{languaje.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProgrammingLanguaje;
