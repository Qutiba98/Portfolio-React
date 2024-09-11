// src/components/EducationSection/EducationSection.js
import React from "react";
import "./EducationSection.css"; // استيراد ملف CSS الخاص بقسم التعليم
import { BiBasketball } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";

const Education = () => {
  return (
    <section id="Education" className="py-5 bg">
      <div className="main-section">
        <div className="container">
          <h2 className="heading-text">Education</h2>
          <div className="width-50">
            <a
              href="https://yo.orange.jo/orange-coding-academy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-list">
                <i className="fa-solid fa-globe" style={{ color: "#f39f19" }}>
                  <BiBasketball />
                </i>
                <h3>Orange Coding Academy</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing portfolio
                  student website
                </p>
              </div>
            </a>
          </div>
          <div className="width-50">
            <a
              href="https://www.bau.edu.jo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-list">
                <i
                  className="fa-solid fa-graduation-cap"
                  style={{ color: "#f39f19" }}
                >
                  <FaUniversity />
                </i>
                <h3>University</h3>
                <p>
                  Al-Balqa Applied University 2019-2023 Bachelor of Computer
                  Information Systems
                </p>
              </div>
            </a>
          </div>
          <div className="width-50">
            <a
              href="https://pierreloti-lycee.skolengo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-list">
                <i className="fa-solid fa-school" style={{ color: "#f39f19" }}>
                  <BiSolidSchool />
                </i>
                <h3>High School</h3>
                <p>Graduated from school in Turkey / 2017-2018</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
