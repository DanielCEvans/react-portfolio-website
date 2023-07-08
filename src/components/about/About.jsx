import React from "react";
import "./about.css";
import { FaAward, FaReact, FaServer } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me-text">
          <p>
            Hey there! I'm Daniel Evans, currently working as a Data Analyst at
            <a href="https://employmenthero.com/" target="_blank">
              {" "}
              Employment Hero
            </a>
            , one of Australia's renowned tech unicorns. My true passion
            however, lies in front-end development. Proficient in web
            development fundamentals—HTML, CSS, JavaScript, React, and
            TypeScript—I take pride in writing clean, concise, and efficient
            code.
          </p>
          <p>
            Beyond web development, I have a solid understanding of computer
            science fundamentals, particularly data structures and algorithms. I
            love staying up to date with the latest developments in the tech
            industry, always hungry to learn new frameworks, tools, and best
            practices.
          </p>
          <p>
            I thrive in diverse team environments, collaborating closely with my
            colleagues. I believe that open dialogue and knowledge sharing lead
            to the best outcomes. I can articulate complex concepts in a clear
            and concise manner, making me a valuable asset during collaborative
            problem-solving sessions.
          </p>
          <p>
            My journey as a front-end developer is an exciting one, and I'm
            dedicated to making a lasting impact. With my foundation in web
            development, my knack for elegant code, and my ability to excel in
            teams, I'm ready to embrace the ever-evolving world of technology
            and create exceptional user experiences.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <FaReact className="about__icon" />
              <h5>React</h5>
              <small>Proficient</small>
            </article>
            <article className="about__card">
              <FaServer className="about__icon" />
              <h5>CS Fundamentals</h5>
              <small>Data structures and algorithms</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
