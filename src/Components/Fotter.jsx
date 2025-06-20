import React from "react";
import { IoCall } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";


function Fotter() {
  return (
    <footer id="Contact" className="footer-section">
 

      <div className="footer-bottom">
        <p>Click here for contact me!</p>
        <div className="social-icons">
          <a className="app" href="https://wa.me/923084893186" target="_blank" rel="noopener noreferrer"><SiWhatsapp /></a>
          <a className="call" href="tel:03084893186"><IoCall /></a>
          <a className="mail" href="mailto:mianusmanahmed757@gmail.com"><IoMdMail /></a>
          <a className="link" href="https://www.linkedin.com/in/mian-usman-ahmed-903261331/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <p>© Copyright All Rights Reserved</p>
        <p><strong>Designed by : Mian Usman</strong> <span>(Frontend Developer)</span></p>
      </div>
    </footer>
  );
}

export default Fotter;
