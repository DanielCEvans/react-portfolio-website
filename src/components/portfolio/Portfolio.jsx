import React from "react";
import "./portfolio.css";
import ROICALC from "../../assets/roiCalc.png";
import TODOAPP from "../../assets/todoapp.png";
import DATASCIENCE from "../../assets/DataScienceWebsite.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My</h5>
      <h2>Personal Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={ROICALC} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            itaque ipsam cum aut.
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/DanielCEvans/roicalculator-copy"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://employmentheroroicalculator.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={TODOAPP} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/DanielCEvans/to-do-app"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://to-do-app-danielevans.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={DATASCIENCE} alt="" />
          </div>
          <h3>Data Science Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/DanielCEvans/DanielCEvans.github.io"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://danielcevans.github.io/index.html"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
