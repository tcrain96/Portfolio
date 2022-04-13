import React from "react";

const Nav = (props) => {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <header>
      <nav>
        <article id="home-logo">
          <h2>TC</h2>
        </article>

        <article id="nav-categories">
          {categories.map((category) => (
            <div
              className={`${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {category.name}
              </span>
            </div>
          ))}
        </article>

        <article id="social-links">
          <a href="https://www.facebook.com/tristan.crain.9">Facebook</a>
          <a href="https://www.facebook.com/tristan.crain.9">GitHub</a>
          <a href="https://www.facebook.com/tristan.crain.9">LinkedIn</a>
        </article>

        <article id="footer-rights">
          <p>2022 Tristan Crain</p>
          <p>All Rights Reserved</p>
        </article>
      </nav>
    </header>
  );
};

export default Nav;
