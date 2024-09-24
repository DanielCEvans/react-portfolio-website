import React from "react";
import "./portfolio.css";
import MEALPLANNER from "../../assets/mealplanner.png"
import ROICALC from "../../assets/roiCalc.png";
import TODOAPP from "../../assets/todoapp.png";
import NAMESORTER from "../../assets/nameSorter.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My</h5>
      <h2>Personal Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={MEALPLANNER} alt="" />
          </div>
          <h3>Meal Planner</h3>
          <h4>Personal Project **work in progress**</h4>
          <h5>
          An application I am in the process of building to automate the process of generating a shopping list. I enjoy cooking, going to the markets, but I do not enjoy the 15-20 minutes it takes me to generate a shopping list. From selecting the recipes, to collating the ingredients, and then determining which ingredients I currently have at home, this application will automate this process. 
          The backend is written in C# /.NET, and the frontend using Angular. The goal is to create a microservice architecture by sending a bus message (using RabbitMQ) to an ‘email’ service which will send the ingredients list via email. I plan to containerise the application, host it within Google Cloud Platform, and utilise Github Actions for the CI/CD pipeline.
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/DanielCEvans/MealPlanner.UI"
              className="btn"
              target="_blank"
            >
              Github - Frontend
            </a>
            <a
              href="https://github.com/DanielCEvans/MealPlanner.Provider"
              className="btn"
              target="_blank"
            >
              Github - Backend
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={ROICALC} alt="" />
          </div>
          <h3>Employment Hero</h3>
          <h4>Return on Investment Calculator</h4>
          <h5>
            A tool I built for the sales teams during my time at Australia's tech unicorn Employment Hero. Very pleased
            with how this project turned out and the quality and structure of
            the code written. This project involved complex form validation,
            modal windows, tooltips, complex calculation logic, and was the
            first time implementing the Zustand state management library which
            significantly reduced excessive prop drilling. <br />
            <span>** Note - this application is not responsive **</span>
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
            <img src={NAMESORTER} alt="" />
          </div>
          <h3>Name Sorter Console Application</h3>
          <h5>
            Javascript console application which can be downloaded as an
            executable from the github repository. This small console
            application will take a list of unsorted names in a .txt file, sort
            the list of names alphabetically by surname (followed by any given
            names), print the sorted names to the console, and save the sorted
            names to a .txt file within the same directory.
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/DanielCEvans/javascript-name-sorter"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={TODOAPP} alt="" />
          </div>
          <h3>To Do List Application</h3>
          <h5>
            The first application I built and deployed using React. This project
            taught me the fundamentals of React, its component-based
            architecture, and state management. This gave me a great foundation
            to understand the benefits of React and how it intelligently updates
            only the necessary parts of the user interface, resulting in
            enhanced performance.
          </h5>
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
      </div>
    </section>
  );
};

export default Portfolio;
