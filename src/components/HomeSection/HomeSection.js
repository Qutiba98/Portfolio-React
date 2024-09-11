// src/components/HomeSection/HomeSection.js
import React from "react";
import "./HomeSection.css"; // استيراد ملف CSS الخاص بقسم الصفحة الرئيسية

const Home = () => {
  return (
    <section className="home" id="header_container">
      <div className="child home-content-left">
        <div style={{ marginLeft: "6%" }}>
          <div className="text1">
            <h1>Hello, I'm Qutiba Arabiyat</h1>
            <br />
            <p className="typing">I Am A Full Stack Web Developer</p>
          </div>
          <br />
          <p id="p2">
            A recent graduate with entry-level work experience specializing in
            IT, system administration, troubleshooting, and technical support.
            Adept at collaborating with diverse IT teams to identify solutions
            for complex technical issues. Expertise in interfacing with
            customers and providing end-user support. Seeking to use skills in
            HTML, CSS, JAVA, C++, and OOP to meet business needs.
          </p>
        </div>
      </div>
      <div className="home-img">
        <div className="glowing-circle">
          <span></span>
          <span></span>
          <div className="image">
            <img src="1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
