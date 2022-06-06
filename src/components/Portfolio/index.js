import React, { useState } from "react";
import socialNetworkAPI_BI from "../../assets/social-network-api-BI.jpg";
import devDen_BI from "../../assets/dev-den-BI.jpg";
import techBlog_BI from "../../assets/tech-blog-BI.JPG";
import eCommerceBackend_BI from "../../assets/e-commerce-backend-BI.jpg";
import grumble_BI from "../../assets/grumble-BI.JPG";
import weatherDashboard_BI from "../../assets/weather-dashboard-BI.JPG";
import puppypals_BI from "../../assets/puppy-pals-BI.png";

import "./index.css";

const Portfolio = () => {
  const projects = [
    {
      name: "Puppy Pals",
      img: puppypals_BI,
      imgVisible: useState(""),
      tools: "A full CRUD, MERN application that enables dog owners to plan events with the intention of meeting other dog owners.",
      github: "https://github.com/tcrain96/puppy-pals.git",
      live: "https://secret-wave-15464.herokuapp.com/",
    },
    {
      name: "Dev-Den",
      img: devDen_BI,
      imgVisible: useState(""),
      tools: "This Web application is a questions forum for developers to ask code related questions and other users can answer the question in the comments section.",
      github: "https://github.com/tcrain96/Dev-Den.git",
      live: "https://obscure-basin-64488.herokuapp.com/",
    },
    {
      name: "Grumble",
      img: grumble_BI,
      imgVisible: useState(""),
      tools: "Grumble is a simple application that helps you plan out your meals when you just can't decide what to eat based on what ingredients you already have at home. It's efficient and easy to use.",
      github: "https://github.com/tcrain96/e-commerce-back-end.git",
      live: "https://tcrain96.github.io/Grumble_Project/",
    },
    {
      name: "Weather Dashboard",
      img: weatherDashboard_BI,
      imgVisible: useState(""),
      tools: "A Weather Dashboard that allows a user to input any city name in the world, and to view that city's current weather, as well as it's 5 day weather forecast.",
      github: "https://github.com/tcrain96/weather-dashboard.git",
      live: "https://tcrain96.github.io/weather-dashboard/",
    },
  ];

  return (
    <section className="portfolio">
      {projects.map((project) => (
        <article
          key={project.name}
          className="project"
          style={{ backgroundImage: "url(" + project.imgVisible[0] + ")" }}
          onMouseEnter={() => {
            project.imgVisible[1](project.img);
          }}
          onMouseLeave={() => {
            project.imgVisible[1]("");
          }}
        >
          <div className="project-information">
            <div className="project-information-title">
              <h2>{project.name}</h2>
              <p>{project.tools}</p>
            </div>

            <div className="project-buttons">
              <a
                href={project.github}
                className="view-project-button"
                target="_blank"
                rel="noreferrer"
              >
                Codebase
              </a>
              <a
                href={project.live}
                className="view-project-button"
                target="_blank"
                rel="noreferrer"
              >
                Live App
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Portfolio;
