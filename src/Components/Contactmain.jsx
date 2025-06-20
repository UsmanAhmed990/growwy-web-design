import React from "react";
import mine2 from "./mine2.jpg";          // apni tasveer ka path
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaGlobe
} from "react-icons/fa";                       // npm i react‑icons

const contactData = [
  {
    icon: <FaMapMarkerAlt />,
    title: "ADDRESS",
    text: "City & District Nankana Sahib ,Pakistan ",
  },
  {
    icon: <FaPhoneAlt />,
    title: "CONTACT NUMBER",
    text: "0308 4893186",
  },
  {
    icon: <FaPaperPlane />,
    title: "EMAIL ADDRESS",
    text: "mianusmanahmed757@gmail.com",
  },
  {
    icon: <FaGlobe />,
    title: "WEBSITE",
    text: "You visiting now.com 😊",
  },
];

export default function ContactSection() {
  return (
    <>  
    
    <div className="container">
      <div className="row align-items-center contact-section">
     
      <div className="col-lg-4  mb-4 mb-lg-0 text-center">
        <img src={mine2} alt="My portrait" className="mine img-fluid" />
      </div>


      <div className="col-lg-8">
        <div className="row g-4">
          {contactData.map(({ icon, title, text }, idx) => (
            <div className="col-12 col-sm-6 px-4 px-md-2" key={idx}>
              <div className="contact-card text-center p-4">
                <span className="icon-wrapper">{icon}</span>
                <h6 className="card-title mt-3">{title}</h6>
                <p className="card-text mb-0">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>

  );
}
