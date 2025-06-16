import React from "react";


export default function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Frontend Developer
        </a>

        {/* Toggler */}      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}      
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex gap-lg-4 gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#">Introduction</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Technical Skills</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Me</a>
            </li>
             
          </ul>
        </div>
      </div>
    </nav>
  );
}
