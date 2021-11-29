import React, { useEffect, useState } from "react";
import styles from "./styles";

export default function Started() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <>
      <div className="iconos">
        <a
          href="https://www.linkedin.com/in/fernando-romero-forsthuber/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#contact">
          <i className="fas fa-envelope-square"></i>
        </a>
      </div>
      <img src="./picture 1.jpg" className="img-section" alt="fernando" />
      <div className="section section-1"></div>
      <div className="section section-2"></div>
      <style jsx>{styles}</style>
    </>
  );
}
