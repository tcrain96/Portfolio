import React,{useState} from "react";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
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

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div id="main-container">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {{"About":<About></About>,
        "Portfolio":<Portfolio/>,
        "Contact":<About/>,
        "Resume":<About/>,
      }[currentCategory.name]}
      </main>
    </div>
  );
}

export default App;
