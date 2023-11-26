import React from "react";
import { InlineText } from "../Components/Paragraph/Paragraph";
import { Helmet } from "react-helmet";

import "./Home.scss";

import githubLogo from "../assets/github.svg";

const Home = () => (
  <div className="page-container">
    <div className="box-image fadeInFromLeft">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <div className="box__title breathing">
          Gaming comes to <span className="fern-text">life</span>.
        </div>
        <div className="box__content">
          <div>
            <InlineText>
              Our passionate game development team is dedicated to crafting
              extraordinary virtual worlds that transcend imagination. With a
              focus on innovation and storytelling, we bring characters to life,
              build immersive environments, and create gameplay experiences that
              captivate and inspire.
            </InlineText>
          </div>

          <div className="box__content__media">
            <a
              href="https://github.com/Fern-fun"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="github" width={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="box__image"></div>
    </div>
  </div>
);

export default Home;
