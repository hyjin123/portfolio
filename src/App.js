import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Intro from "./components/Intro";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <NavBar />
          <Intro />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
