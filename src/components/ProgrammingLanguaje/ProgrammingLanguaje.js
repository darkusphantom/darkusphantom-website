import React from "react";

import "./ProgrammingLanguaje.css";
import ProgrammingLanguajes from "../../data/ProgrammingLanguajes";

const ProgrammingLanguaje = () => {
  return (
    <div className="aboutme__programmingLanguaje container-grid">
      <h3 className="aboutme__title">Mis Herramientas</h3>
      {ProgrammingLanguajes.map((languaje) => {
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
