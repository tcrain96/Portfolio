import React from "react";

function categorySelected(name) {
  console.log(`${name} clicked`);
}

const Nav = () => {
  const categories = [
    {
      name: "about",
    },
    {
      name: "portfolio",
    },
    {
      name: "contact",
    },
    {
      name: "resume",
    },
  ];
  return (
    <header>
      <nav>
        {categories.map((category) => (
          <span
            key={category.name}
            onClick={() => categorySelected(category.name)}
          >
            {category.name}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
