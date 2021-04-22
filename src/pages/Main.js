import React, { Fragment } from "react";
import "../index.css";
import "./css/Main.css";
import AboutMe from "../components/AboutMe";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <AboutMe />
      </div>
    </div>
  );
};

export default Main;
