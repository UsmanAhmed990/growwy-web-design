import './Style.scss'
import React from 'react';
import Navbar from './Components/Navbar';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Contactmain from './Components/Contactmain';
import Fotter from './Components/Fotter';
import ProjectsLanding from './Components/ProjectsLanding';


function App() {
  return (
    <>

    <Navbar />
    <Education />
    <Skills />
    <br />
    <ProjectsLanding />
    <br  /> <br />
    <Projects />
    <br  /> <br />
    <Contact />
    <br className='d-none d-md-block' /> <br />
    <Contactmain  />
    <Fotter />
      



    </>
  )
}

export default App;
