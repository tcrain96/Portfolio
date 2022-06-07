import React from "react";
import "./index.css";
import resume from "../../assets/resume.pdf";

const Resume = () => {
  return (
    <section className="resume">

      <div className="resume-info">
        <h2>Resume</h2>
        <p>
          Throughout my journey as a web developer, I've always enjoyed a
          variety of programming focuses. My personal favourite is front-end
          development, but I have ample experience in back-end as well as CMS
          products like Squarespace and Wordpress.
        </p>
        <a href={resume} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </div>

      <div className="resume-info">
        <h2>Front-End Skills</h2>
        <div class="skills-lists">
        <div class="left-list">
          <p>JavaScript ES6+</p>
          <p>CSS3</p>
          <p>HTML5</p>
          <p>Python</p>
          <p>React</p>
          <p>JQuery</p>
          <p>Bootstrap</p>
        </div>
        <div class="right-list">
          <p>NodeJS</p>
          <p>Heroku</p>
          <p>Wordpress</p>
          <p>Visual Studio Code</p>
          <p>Squarespace</p>
          <p>GitHub</p>
          <p>Git</p>
        </div>
        </div>
      </div>

      <div className="resume-info">
        <h2>Back-End Skills</h2>
        <div class="skills-lists">
        <div class="left-list">
          <p>SQL</p>
          <p>MongoDB</p>
          <p>Sequelize</p>
          <p>BCrypt</p>
          <p>Handlebars</p>
        </div>
        <div class="right-list">
          <p>NoSQL</p>
          <p>Express</p>
          <p>GraphQL</p>
          <p>Mongoose</p>
          <p>NodeJS</p>
        </div>
        </div>
      </div>

    </section>
  );
};

export default Resume;
