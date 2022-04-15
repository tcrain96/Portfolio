//Required Imports
import React, { useState } from "react";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  //categories state
  const [categories] = useState([
    {
      name: "About",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);

  //current category state
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div id="main-container">
      <Nav
        categories={categories}
        currentCategory={currentCategory}
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
              return <Resume />;
            default:
              return null;
          }
        })()}
      </main>
    </div>
  );
}

export default App;
