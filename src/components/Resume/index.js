import React from "react";
import "./index.css";
import resume from "../../assets/resume.pdf";

const Resume = () => {
  return (
    <section className="resume">
      <div className="resume-info">
        <h2>Resume</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
