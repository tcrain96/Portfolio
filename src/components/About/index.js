import React from "react";
import aboutPicture from "../../assets/about-picture.jpg";
import "./index.css";
const About = (props) => {
  const { categories = [], setCurrentCategory } = props;

  return (
    <section className="about">
      <img src={aboutPicture} alt="Tristan" className="about-image" />
      <h2>Hi! My Name is Tristan.</h2>
      <p>
        I'm so happy you've taken the time to stop by my website. Here's a few
        things worth knowing about me. I currently live in Ottawa Ontario, and
        am in the middle of completing a Bootcamp program at Carleton University
        in fullstack web development. I'm passionate about video games, love
        people, and want to invest in creating tools that help those in need.
        Web development has given me the opportunity to make a difference during
        COVID, and it is my goal to continue doing this for you. Whether it's
        communications, web development, or anything in-between, I would love to
        connect.
      </p>
      <div className="about-buttons">
        <span
          onClick={() => {
            setCurrentCategory(categories[1]);
          }}
        >
          View Portfolio
        </span>
        <span
          onClick={() => {
            setCurrentCategory(categories[2]);
          }}
        >
          Contact Me
        </span>
      </div>
    </section>
  );
};

export default About;
