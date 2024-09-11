// src/components/SkillsSection/SkillsSection.js
import React from "react";
import "./SkillsSection.css"; // استيراد ملف CSS الخاص بقسم المهارات
import { BsFiletypeHtml } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { BsFiletypePhp } from "react-icons/bs";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa6";

const SkillsSection = () => {
  return (
    <section id="project" className="py-5 bg">
      <div className="main-section">
        <div className="container">
          <h2 className="heading-text">My Skills</h2>
          <div className="skill">
            <i className="fa-brands fa-html5" style={{ color: "#f39f19" }}>
              <BsFiletypeHtml />
            </i>
            <b> - HTML</b>
            <span>99%</span>
            <div>
              <span style={{ width: "99%" }}></span>
            </div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-css3-alt" style={{ color: "#f39f19" }}>
              {" "}
              <FaCss3Alt />
            </i>
            <b> - CSS</b>
            <span>97%</span>
            <div>
              <span style={{ width: "97%" }}></span>
            </div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-java" style={{ color: "#f39f19" }}>
              <FaNodeJs />
            </i>
            <b> - JS</b>
            <span>90%</span>
            <div>
              <span style={{ width: "90%" }}></span>
            </div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-java" style={{ color: "#f39f19" }}>
              <FaDatabase />
            </i>
            <b> - Database</b>
            <span>75%</span>
            <div>
              <span style={{ width: "75%" }}></span>
            </div>
          </div>
          <div className="skill">
            <i
              className="fa-brands fa-c-plus-plus"
              style={{ color: "#f39f19" }}
            >
              {" "}
              <BsFiletypePhp />
            </i>
            <b> - PHP</b>
            <span>65%</span>
            <div>
              <span style={{ width: "65%" }}></span>
            </div>
          </div>
          <div className="skill">
            <i
              className="fa-brands fa-c-plus-plus"
              style={{ color: "#f39f19" }}
            >
              <FaLaravel />
            </i>
            <b> - Laravel</b>
            <span>65%</span>
            <div>
              <span style={{ width: "65%" }}></span>
            </div>
          </div>
          <div className="skill">
            <i
              className="fa-brands fa-c-plus-plus"
              style={{ color: "#f39f19" }}
            >
              <FaReact />
            </i>
            <b> - React</b>
            <span>65%</span>
            <div>
              <span style={{ width: "65%" }}></span>
            </div>
          </div>
          <div className="skill">
            <i
              className="fa-brands fa-c-plus-plus"
              style={{ color: "#f39f19" }}
            >
              <FaWordpress />
            </i>
            <b> - wordpress</b>
            <span>65%</span>
            <div>
              <span style={{ width: "65%" }}></span>
            </div>
          </div>
          {/* SSSSSSSSSSSSSSSS */}
          <br /> <br />
          <h2 className="heading-text">Language</h2>
          <div className="width-50">
            <div className="skill">
              <i className="fa-solid fa-language" style={{ color: "#f39f19" }}>
                <RiEnglishInput />
              </i>
              <b> - English</b>
              <span>80%</span>
              <div>
                <span style={{ width: "80%" }}></span>
              </div>
            </div>

            <div className="skill">
              <i className="fa-solid fa-language" style={{ color: "#f39f19" }}>
                <FaLanguage />
              </i>
              <b> - Arabic</b>
              <span>97%</span>
              <div>
                <span style={{ width: "85%" }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
