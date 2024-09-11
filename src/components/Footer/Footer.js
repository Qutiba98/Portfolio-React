// src/components/Footer/Footer.js
import React from "react";
import "./Footer.css"; // استيراد ملف CSS الخاص بالتذييل

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div id="aaa" className="footer-sect social-icon width-50">
          <a
            href="https://www.facebook.com/qutipa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-facebook"
              style={{ color: "#25eeeb" }}
            ></i>
          </a>

          <a
            href="https://x.com/qutipaarpiat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-twitter"
              style={{ color: "#25eeeb" }}
            ></i>
          </a>

          <a
            href="https://www.linkedin.com/in/qutiba-arabiyat-9025ba25b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-linkedin"
              style={{ color: "#f39f19" }}
            ></i>
          </a>

          <a
            href="https://github.com/Qutiba98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github" style={{ color: "#f39f19" }}></i>
          </a>
        </div>

        <div className="footer-sect mt-20 width-50">
          <a id="email">| Email: Qutipa.arabiyat@gmail.com | </a>
          <br />
          <a id="phone">| Phone: +962 77919 9880 |</a>
          <br />
          CopyRight © 2024 qutiba.com Website Template. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
