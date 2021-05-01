import React from "react";

import "../index.css";
import "./css/Main.css";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
};

export default Main;
