import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <p style={{ color: "white", fontSize: "x-large" }}>
            <img src={Logo} alt="Logo" />
            Learning Exp.
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p
          onClick={() => handleSetActiveSection("Home")}
          className={activeSection === "Home" ? "active" : ""}
        >
          <a href="#home">Home</a>
        </p>
        <p
          onClick={() => handleSetActiveSection("Services Us")}
          className={activeSection === "Services Us" ? "active" : ""}
        >
          <a href="#home">Services Us</a>
        </p>
        <p
          onClick={() => handleSetActiveSection("Why Us")}
          className={activeSection === "Why Us" ? "active" : ""}
        >
          <a href="#home">Why Us</a>
        </p>
        <p
          onClick={() => handleSetActiveSection("Our Goals")}
          className={activeSection === "Our Goals" ? "active" : ""}
        >
          <a href="#home">Our Goals</a>
        </p>
        <button type="button" className="rounded-button">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
