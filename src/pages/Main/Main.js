import React from "react";

import "../../index.css";
import "./Main.css";
import AboutMe from "../../components/AboutMe/AboutMe";
import Projects from "../../components/Projects/Projects";
import Blog from "../../components/Blog/blog";
import SocialNetwork from "../../components/SocialNetworks/SocialNetworks";
import FooterPage from "../../components/FooterPage/FooterPage";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <AboutMe />
        <Projects />
        <Blog />
        <SocialNetwork />
        <FooterPage />
      </div>
    </div>
  );
};

export default Main;
