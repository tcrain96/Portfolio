import React from "react";
import "./index.css";

const Nav = (props) => {
  const { categories = [], currentCategory, setCurrentCategory } = props;
  return (
    <header>
      <nav className="nav">
        <article
          className="home-logo"
          onClick={() => {
            setCurrentCategory(categories[0]);
          }}
        >
          <h2>TC</h2>
        </article>

        <article className="nav-categories">
          {categories.map((category) => (
            <span key={category.name} className={`${currentCategory.name === category.name ? 'navActive' : 'navInactive'}`}
              onClick={() => {
                setCurrentCategory(category);
              }}
              
            >
              {category.name}
            </span>
          ))}
        </article>

        <article className="social-links">
          <a
            href="https://www.facebook.com/tristan.crain.9"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://github.com/tcrain96"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tristancrain/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </article>

        <article className="footer-rights">
          <p>2022 Tristan Crain</p>
          <p>All Rights Reserved</p>
        </article>
      </nav>
    </header>
  );
};

export default Nav;
