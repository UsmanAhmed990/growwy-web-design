import React from 'react'
import gmz from './GMZ.png'
import brain  from './brain2.jpg'
import { FaCode } from "react-icons/fa6";
import { FaCodeMerge } from "react-icons/fa6";
import { DiCodeigniter } from "react-icons/di";
import swirl  from './swirl.jpg'

function Projects() {
  return (
    <div>
      










    {/* __________________________section of Experience____________________ */}


<div className="container">
 <div className="heading-wrapper">
    <h1 id='Experiences' className='span-p2'>Work Experience</h1>
    </div>
    
<div className="row">
    {/* col-1' */}
    <div className="col-lg-4 d-flex px-4 px-md-3">
    <div className="box">
        <div className="image">
            <img className='brain' src={brain} alt="" />
        </div>
        <h1 className='h1-h1'>Brainstromers Tech <FaCodeMerge /></h1>
        <p className='brain-p'>I completed 3-months internship at Brainstormers-Tech Software House Lahore, 
            focusing on frontend skills. I worked with HTML, CSS, and Bootstrap
              to build responsive web pages.This helped me strengthen my understanding of frontend fundamentals</p>
    </div>

    </div>
    {/* col-2' */}
    <div className="col-lg-4 d-flex px-4 px-md-3">
    <div className="box">
        <div className="image">
            <img className='brain' src={gmz} alt="" />
        </div>
        <h1 className='h1-h1'>Genius Mind Zone <DiCodeigniter /></h1>
        <p className='brain-p'>I completed 3-months internship at Genius Mind Zone Software House Faislabad,
             where I worked with HTML, CSS, SASS, Bootstrap, and React.
               I gained hands-on experience in building modern real-time projects. I am now working there as a  Frontend Developer.</p>
    </div>

    </div>
    {/* col-3' */}
    <div className="col-lg-4 d-flex px-4 px-md-3">
    <div className="box">
        <div className="image">
            <img className='brain' src={swirl} alt="" />
        </div>
        <h1 className='h1-h1'>Social Swirl  <FaCode /></h1>
        <p className='brain-p'>I am currently doing my 2-months paid remote internship 
            with Social Swirl Software House, Lahore. I am working on building responsive user interfaces using modern frontend technologies.
             This opportunity is helping me enhance my real-world&nbsp;development</p>
    </div>
    </div>



</div>

    </div>



    </div>
  
  )
}

export default Projects
