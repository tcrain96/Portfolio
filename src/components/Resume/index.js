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
          development, but I have ample experience in back-end as well as CSM
          products like Squarespace and Wordpress to say I can handle most
          tasks! Please take a look at my resume and feel free to contact me.
        </p>
        <a href={resume} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </div>
      <div className="resume-bars">
        <h2 id="f-e">Front-end</h2>
        <h2 id="cms">CMS</h2>
        <h2 id="b-e">Back-end</h2>
        <h2 id="react">ReactJS</h2>
      </div>
    </section>
  );
};

export default Resume;
