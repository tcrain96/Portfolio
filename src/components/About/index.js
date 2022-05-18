import React from "react";
import aboutPicture from "../../assets/about-picture.jpg";
import "./index.css";
const About = (props) => {
  const { categories = [], setCurrentCategory } = props;

  return (
    <section className="about">
      <img src={aboutPicture} alt="Tristan" className="about-image" />
      <div className="about-information">
        <h2>Hi! My Name is Tristan.</h2>
        <p>
        I'm a Front-End Web Developer leveraging a Game Development background to build fun, intuitive and
        innovative user experiences on the web. I earned a certificate in Full-Stack Web Development from Carleton University.
        I'm an innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. My strengths are in
        creativity, teamwork, and building projects from ideation to execution.
        </p>
        <div className="about-buttons">
          <span
            onClick={() => {
              setCurrentCategory(categories[1]);
            }}
          >
            View Portfolio
          </span>
          <a href="mailto:tristan.crain@outlook.com"
            target="_blank"
            rel="noreferrer">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
