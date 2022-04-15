import React, { useState } from "react";
import socialNetworkAPI_BI from "../../assets/social-network-api-BI.jpg";
import devDen_BI from "../../assets/dev-den-BI.jpg";
import techBlog_BI from "../../assets/tech-blog-BI.JPG";
import eCommerceBackend_BI from "../../assets/e-commerce-backend-BI.jpg"
import grumble_BI from "../../assets/grumble-BI.JPG";
import weatherDashboard_BI from "../../assets/weather-dashboard-BI.JPG";

import "./index.css";

const Portfolio = () => {
  const projects = [
    {
      name: "Social Network API",
      img: socialNetworkAPI_BI,
      imgVisible: useState(""),
      tools: "express, mongoose, and mongo",
      github: "https://github.com/tcrain96/social-network-api",
      live: "https://drive.google.com/file/d/1mkCUV0jiQZKFe0gBgSuFKZrR3Z2c4f7V/view",
    },
    {
      name: "Tech Blog",
      img: techBlog_BI,
      imgVisible: useState(""),
      tools: "bcrypt, express, mysql2, and sequelize",
      github: "https://github.com/tcrain96/tech-blog.git",
      live: "https://cryptic-forest-14780.herokuapp.com/",
    },
    {
      name: "Dev-Den",
      img: devDen_BI,
      imgVisible: useState(""),
      tools: "bcrypt, express, mysql2, and sequelize",
      github: "https://github.com/tcrain96/Dev-Den.git",
      live: "https://obscure-basin-64488.herokuapp.com/",
    },
    {
      name: "E-Commerce Backend",
      img: eCommerceBackend_BI,
      imgVisible: useState(""),
      tools: "express, mysql2, sequelize",
      github: "https://github.com/tcrain96/e-commerce-back-end",
      live: "https://drive.google.com/file/d/1I-axTnpi12_NUbhBeWzfTeUlOLJORiw5/view",
    },
    {
      name: "Grumble",
      img: grumble_BI,
      imgVisible: useState(""),
      tools: "HTML, CSS, JS",
      github: "https://github.com/tcrain96/e-commerce-back-end.git",
      live: "https://tcrain96.github.io/Grumble_Project/",
    },
    {
      name: "Weather Dashboard",
      img: weatherDashboard_BI,
      imgVisible: useState(""),
      tools: "HTML, CSS, JS",
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
