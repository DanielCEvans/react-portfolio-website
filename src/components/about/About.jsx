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
            Hey there! I'm Daniel Evans, currently working as a Full Stack developer at
            <a href="https://dyedurham.com.au/" target="_blank">
              {" "}
              Dye & Durham.
              {" "} 
            </a>
            My approach to development is rooted in a deep understanding of 
            SOLID principles, which ensures that the software I build is not
            only robust and maintainable, but also adaptable to change.
          </p>
          <p>
            With a strong grasp of computer science fundamentals, particularly
            in data structures and algorithms, I enjoy tackling complex problems
            and optimising performance for both server-side and client-side applications.
            I'm always eager to learn and stay updated with the latest technologies, 
            continuously refining my skills to deliver high-quality solutions that meet 
            both business goals and user needs.
          </p>
          <p>
            I thrive in diverse team environments, collaborating closely with my
            colleagues. I believe that open dialogue and knowledge sharing lead
            to the best outcomes. I can articulate complex concepts in a clear
            and concise manner, making me a valuable asset during collaborative
            problem-solving sessions.
          </p>
          <p>
            My journey as a developer is an exciting one, and I'm dedicated to making
            a lasting impact. With my foundation in web development, my knack for elegant code, 
            and my ability to excel in teams, I'm ready to embrace the ever-evolving world of technology.
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
              <h5>.Net and Angular</h5>
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
