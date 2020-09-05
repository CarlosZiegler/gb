import React from "react";
import iconContact from "../../assets/icons/first.png"
import "./style.css";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="left-navbar">
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="brand-title">McMakler</div>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#">
              <img src={iconContact} alt='Contact Support' />
              Contact Support
            </a>
          </li>
          <li><a href="#"> Message icon</a></li>
          <li><a href="#"> User icon</a></li>
          <li><a href="#"> Turn Off icon </a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;