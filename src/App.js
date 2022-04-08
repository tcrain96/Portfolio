import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div id="main-container">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
