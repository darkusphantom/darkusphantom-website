import React from "react";

import "../index.css";
import "./css/Main.css";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import FooterPage from "../components/FooterPage";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <AboutMe />
        <Projects />
        <Contacts />
        <FooterPage />
      </div>
    </div>
  );
};

export default Main;
