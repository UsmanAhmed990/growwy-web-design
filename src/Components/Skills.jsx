import React, { useEffect, useRef } from "react";

const skillSet = [
  { name: "HTML 5",      level: 95 },
  { name: "CSS 3 + SASS",       level: 90 },
  { name: "Figma to Coding perfect-pixel",        level: 90 },
  { name: "JavaScript",  level: 80 },
  { name: "Bootstrap 5", level: 90 },
  { name: "React",       level: 65 },
];

export default function Skills() {
  const sectionRef = useRef(null);   
  const barsRef    = useRef([]);

  const runAnimation = () => {
    barsRef.current.forEach((bar, idx) => {
      if (bar) bar.style.width = skillSet[idx].level + "%";
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

   
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();        
          observer.disconnect(); 
        }
      },
      { threshold: 0.35 }       
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

 
  const mid = Math.ceil(skillSet.length / 2);
  const colLeft  = skillSet.slice(0, mid);
  const colRight = skillSet.slice(mid);

  const renderColumn = (data, startIndex) =>
    data.map((skill, i) => (
      <div id="Skills" className="skill-item" key={skill.name}>
        <div className="label-row">
          <span>{skill.name}</span>
          <span>{skill.level}%</span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            ref={el => (barsRef.current[startIndex + i] = el)}
          />
        </div>
      </div>
    ));

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="title">My Skills</h2>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">{renderColumn(colLeft, 0)}</div>
          <div className="col-12 col-md-6">{renderColumn(colRight, mid)}</div>
        </div>
      </div>
    </section>
  );
}
