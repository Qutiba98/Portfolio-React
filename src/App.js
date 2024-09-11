// src/App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeSection from "./components/HomeSection/HomeSection";
import EducationSection from "./components/EducationSection/EducationSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Footer from "./components/Footer/Footer";
import "./App.css"; // ملف CSS الأساسي لتنسيقات عامة
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "black",
      }}
    >
      <Navbar />
      <HomeSection />
      <EducationSection />
      <SkillsSection />
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default App;
