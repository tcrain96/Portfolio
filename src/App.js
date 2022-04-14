import React, { useState } from "react";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: "About",
      isSelected: false,
    },
    {
      name: "Portfolio",
      isSelected: false,
    },
    {
      name: "Contact",
      isSelected: false,
    },
    {
      name: "Resume",
      isSelected: false,
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div id="main-container">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
      ></Nav>
      <main>
        {(() => {
          switch (currentCategory.name) {
            case "About":
              return (
                <About
                  categories={categories}
                  setCurrentCategory={setCurrentCategory}
                ></About>
              );
            case "Portfolio":
              return <Portfolio />;
            case "Contact":
              return <Contact />;
            case "Resume":
              return <About />;
            default:
              return null;
          }
        })()}
      </main>
    </div>
  );
}

export default App;
