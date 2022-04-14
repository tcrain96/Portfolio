import React, { useState } from "react";
import socialNetworkAPI_BI from "../../assets/social-network-api-BI.jpg";
import budgetTracker_BI from "../../assets/budget-tracker-BI.jpg";
import devDen_BI from "../../assets/dev-den-BI.jpg";
import "./index.css";

const Portfolio = () => {
  const projects = [
    {
      name: "Social Network API",
      img: socialNetworkAPI_BI,
      description:
        "A simple example of a NoSQL (mongo) database for a social networking site.",
      tools: "express, mongoose, and mongo",
      link: "https://github.com/tcrain96/social-network-api",
      buttonOpacity: useState(0),
      backgroundOpacity: useState(0.5),
    },
    {
      name: "Budget Tracker",
      img: budgetTracker_BI,
      description:
        "An application that allows you to track your budget. Demonstrates itself as a PWA by functioning online and offline using a manifest and service workers",
      tools: "express, mongo, and service workers",
      link: "https://fathomless-earth-98550.herokuapp.com/",
      buttonOpacity: useState(0),
      backgroundOpacity: useState(0.5),
    },
    {
      name: "Dev-Den",
      img: devDen_BI,
      description:
        "An application that acts as a stack overflow clone. It uses MySQL and the MVC paradigm to store data and allows for users to log-in, post question and receive responses from other users.",
      tools:
        "bcrypt, connect-session-sequelize, dotenv, express, handlebars, mysql2, sequelize",
      link: "https://obscure-basin-64488.herokuapp.com/",
      buttonOpacity: useState(0),
      backgroundOpacity: useState(0.5),
    },
    {
      name: "E-Commerce Backend",
      img: "",
      description:
        "An application that allows a user to track an online stores database using sequelize.",
      tools: "dotenv, express, mysql2, sequelize",
      link: "https://github.com/tcrain96/e-commerce-back-end",
      buttonOpacity: useState(0),
      backgroundOpacity: useState(0.5),
    },
    {
      name: "Grumble",
      img: "",
      description:
        "Grumble is a simple application that helps you plan out your meals when you just can't decide what to eat based on what ingredients you already have at home.",
      tools: "CocktailDB API, Spoonacular API, HTML, CSS, JS",
      link: "https://tcrain96.github.io/Grumble_Project/",
      buttonOpacity: useState(0),
      backgroundOpacity: useState(0.5),
    },
  ];

  return (
    <section className="portfolio">
      {projects.map((project) => (
        <article
          key={project.name}
          className="project"
          style={{
            backgroundImage: "url(" + project.img + ")",
            opacity: project.backgroundOpacity[0],
          }}
          onMouseEnter={() => {
            project.buttonOpacity[1](1);
            project.backgroundOpacity[1](1);
          }}
          onMouseLeave={() => {
            project.buttonOpacity[1](0);
            project.backgroundOpacity[1](0.5);
          }}
        >
          <div
            className="view-project-container"
            style={{ opacity: project.buttonOpacity[0] }}
          >
            <a href="facebook.com" className="view-project-button">
              View Project
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Portfolio;
