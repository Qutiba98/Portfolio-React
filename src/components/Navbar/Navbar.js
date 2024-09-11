// src/components/Navbar/Navbar.js
import React from "react";
import "./Navbar.css"; // استيراد ملف CSS الخاص بشريط التنقل

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Q.A
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-3">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#Education">
                Education
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#project1">
                Skills
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#project">
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
