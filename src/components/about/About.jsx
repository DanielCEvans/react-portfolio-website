import React from "react";
import "./about.css";
import { FaAward, FaReact, FaServer } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";

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
            , one of Australia's renowned tech unicorns. I thrive on the
            challenge of exploring data, applying statistical analysis
            techniques, and leveraging machine learning tools to extract
            meaningful patterns and trends.
          </p>
          <p>
            I take pride in transforming intricate analytical findings into
            clear and impactful insights that resonate with both technical and
            non-technical audiences. Whether it's presenting to executives,
            collaborating with colleagues, or working within diverse teams, I
            believe effective communication is the key to unlocking the true
            value of data.
          </p>
          <p>
            Collaboration fuels my inspiration. I embrace the opportunity to
            work with individuals from diverse backgrounds, as I believe that
            collective perspectives enhance problem-solving and foster
            innovative solutions. Together, we can leverage our skills and
            knowledge to drive data-driven decision-making and achieve
            remarkable outcomes.
          </p>
          <p>
            I am thrilled to be part of this dynamic field, where data holds the
            potential to drive transformative change.
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
              <LuBrainCircuit className="about__icon" />
              <h5>Machine Learning</h5>
              <small>Proficient</small>
            </article>
            <article className="about__card">
              <FaServer className="about__icon" />
              <h5>CS Fundamentals</h5>
              <small>Data structures and algorithms</small>
            </article>
          </div>
        </div>

        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default About;
