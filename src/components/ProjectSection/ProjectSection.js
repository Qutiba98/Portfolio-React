// src/components/ProjectSection/ProjectSection.js
import React from "react";
import "./ProjectSection.css"; // استيراد ملف CSS الخاص بقسم المشاريع

const ProjectSection = () => {
  return (
    <section id="project" className="py-5 bg">
      <div className="main-section">
        <div className="container">
          <h2 className="heading-text">My Project</h2>
          <div className="width-50">
            <a
              href="https://github.com/Qutiba98/task-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-list">
                <i
                  className="fa-solid fa-globe"
                  style={{ color: "#f39f19" }}
                ></i>
                <h3>Web HTML, CSS</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing portfolio
                  student website
                </p>
              </div>
            </a>
          </div>

          <div className="width-50">
            <a
              href="https://github.com/Qutiba98/task3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-list">
                <i
                  className="fa-solid fa-code"
                  style={{ color: "#f39f19" }}
                ></i>
                <h3>Web Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, student graphic design portfolio
                  websites euismod
                </p>
              </div>
            </a>
          </div>

          <div className="width-50">
            <a
              href="https://github.com/Qutiba98/tist-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-list">
                <i
                  className="fa-solid fa-thumbs-up"
                  style={{ color: "#f39f19" }}
                ></i>
                <h3>Bootstrap</h3>
                <p>
                  Lorem ipsum dolor sit amet, student portfolio website examples
                  nonummy nibh euismod
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
