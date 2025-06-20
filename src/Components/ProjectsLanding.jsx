import React from "react";
import { RiStethoscopeFill } from "react-icons/ri";
import {
  FaHospital,
  FaUtensils,
  FaImage,
  FaReact,
  FaFilm,
  FaFigma,
} from "react-icons/fa";

const projects = [
  {
    icon: <RiStethoscopeFill />,
    title: "Amina Hospital Website",
    org: "HTML CSS BOOTSTRAP",
    desc: "Developed a fully responsive and dynamic website for Amina Hospital using HTML, CSS, and Bootstrap. It received positive feedback for its professional layout and smooth responsiveness on all devices. ",
    link: "https://aminahospitallive.netlify.app/",
  },
  {
    icon: <FaUtensils />,
    title: "Recipe Finder App",
    org: "JavaScript API's",
    desc: "Built a fully functional Recipe Finder app utilizing JavaScript and API integration for real-time data fetching. This project demonstrates strong skills in JavaScript, asynchronous programming.Using async/await made my code cleaner and easier to manage compared to callbacks.",
    link: "https://recpeiapplive.netlify.app/",
  },
  {
    icon: <FaImage />,
    title: "Random Images Generator API",
    org: "HTML, CSS, JS",
    desc: "I made a random picture generator app that fetches data using an API. I received a lot of positive reviews for it.This skill enables me to dynamically render updated content on the frontend, enhancing user interactivity and engagement.",
    link: "https://randompicsgeneratorapp.netlify.app/",
  },
  {
    icon: <FaReact />,
    title: "Morphis Sidebar Page",
    org: "React Routing & States",
    desc: "I created a sidebar page using React routing and state management, and built it as part of a complete React application. I converted pixel-perfect Figma to code.My routing setup includes dynamic routes, nested routes, and navigation guards to create a seamless and structured user experience.",
    link: "https://morphisweb.netlify.app/",
  },
  {
    icon: <FaFilm />,
    title: "Movie Search App",
    org: "JavaScript API's",
    desc: "I developed a Movie Finder app using async/await for fetching data from a movie API. The app displays complete movie details including the title, rating, duration, cast, release year, genre, box office collection, and a short plot summary. It also includes a search feature for finding movies quickly by name.",
    link: "https://moviessearchapplicationfinder.netlify.app/",
  },
  {
    icon: <FaFigma />,
    title: "Figma Layout to Coding",
    org: "Figma to Pixel",
    desc: "I converted a Figma layout into a pixel-perfect design using React in my project. I closely followed the design specifications to ensure accuracy in spacing, alignment, and responsiveness. The layout matches the Figma design precisely across all screen sizes.",
    link: "https://teacheraid.netlify.app/",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div id="Projects" className="heading-wrapper mt-0 ">
          <h1 className="span-p2 mb-lg-5 mb-md-5 mb-4 ">My Projects</h1>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4 px-5 px-md-3">
              <div className="project-card p-4 h-100">
                <h4 className="project-title d-flex align-items-center gap-2">
                  <span className="project-icon">{project.icon}</span> {project.title}
                </h4>
                <p className="project-org text-uppercase">{project.org}</p>
                <p className="project-desc">{project.desc}</p>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
