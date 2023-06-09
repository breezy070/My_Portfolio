import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro({ mode }) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Javascript",
        "PHP",
        "MySQL",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "HTML",
        "CSS/SASS",
        "Bootstrap",
        "Prestashop",
        "PowerBI",
        "Git & Github",
      ],
    });
  }, []);

  return (
    <div
      className={"intro" + (mode === true ? " lightMode" : " darkMode")}
      id="intro"
    >
      <div className="left">
        <div
          className={
            "imgContainer" + (mode === true ? " lightMode" : " darkMode")
          }
        >
          <img src="assets/fabrizio.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Fabrizio Di Marco</h1>
          <h3>
            Web Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portofolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
