import React, { useState } from "react";
import logo from "../../Assets/ao-logo6.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <a href="/" className="logo">
            <img src={logo} alt="" />
          </a>
          <ul className={"navMenu" + (isActive ? " active" : "")}>
            <li onClick={removeActive}>
              <a href="/experience" className="navLink">
                Experience
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/skillset" className="navLink">
                Skillset
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/projects" className="navLink">
                Projects
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/contact" className="navLink">
                Contact
              </a>
            </li>
          </ul>
          <div
            className={"hamburger" + (isActive ? " active" : "")}
            onClick={toggleActiveClass}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
