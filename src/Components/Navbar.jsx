import React from "react";
import header from './header.jpg';
import { ReactTyped } from 'react-typed';
import CV from './Rabdom.pdf'




export default function Navbar() {
  return (
    <>

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
              <a className="nav-link" href="#Introduction">Introduction</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Skills">Technical Skills</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#Projects">Projects</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#Experiences">Work&nbsp;Experiences</a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="#Contact">Contact Me</a>
            </li>
             
          </ul>
        </div>
      </div>
      

    </nav>


{/* // ________________________________________Header Section_________________________________________ */}


<div className="header-main">

<div className="container-fluid">
  <div className="row">
    {/* col-1 */}
     <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 mt-md-0 pt-3 pt-md-0 align-content-center">
      <div className="text-main">
      <p id="hello">Hello!</p>
      <h1 className="h1-head">
        I'm a {" "}
        <span className="span-p">
        <ReactTyped className="slider"
  strings={["Web Designer", "Frontend Developer", "Freelancer"]}
  typeSpeed={80}
  backSpeed={30}
  loop
/>
</span>
      </h1>
       </div>
       <div className="btn-mains">
 <a
        href={CV}      
        download={CV}
        className="cv-btn"
      >
        Download CV
      </a>
      <button className="cv-btn work-btn">My Work ▼</button>
      </div>
    </div>
   
    {/* col-2' */}
    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
      <div className="img-main">
      <img className="header" src={header} alt="" />
      </div>
    </div>

    
  </div>
</div>



</div>




</>

  );
}
