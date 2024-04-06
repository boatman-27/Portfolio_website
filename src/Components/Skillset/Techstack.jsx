import React from "react";
import { DiJavascript1, DiReact } from "react-icons/di";
import {
  SiWeb3Dotjs,
  SiHtml5,
  SiSolidity,
  SiCplusplus,
  SiPython,
  SiFlutter,
  SiCsswizardry,
  SiBootstrap,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiSelenium,
} from "react-icons/si";
import { GiTurtle } from "react-icons/gi";

const Techstack = () => {
  return (
    <div className="techstack">
      <div className="project-heading">
        <h1>
          Professional <strong className="key_words">Skillset </strong>
        </h1>
      </div>
      <div className="techstack-container">
        <div className="tech-icons" title="C++">
          <SiCplusplus />
        </div>
        <div className="tech-icons" title="Python">
          <SiPython />
        </div>
        <div className="tech-icons" title="JavaScript">
          <DiJavascript1 />
        </div>
        <div className="tech-icons" title="React.js">
          <DiReact />
        </div>
        <div className="tech-icons" title="Solidity">
          <SiSolidity />
        </div>
        <div className="tech-icons" title="FLutter">
          <SiFlutter />
        </div>
        <div className="tech-icons" title="HTML5">
          <SiHtml5 />
        </div>
        <div className="tech-icons" title="web3.js">
          <SiWeb3Dotjs />
        </div>
        <div className="tech-icons" title="CSS">
          <SiCsswizardry />
        </div>
        <div className="tech-icons" title="Bootstrap">
          <SiBootstrap />
        </div>
        <div className="tech-icons" title="PostgreSQL">
          <SiPostgresql />
        </div>
        <div className="tech-icons" title="Express JS">
          <SiExpress />
        </div>
        <div className="tech-icons" title="Node.JS">
          <SiNodedotjs />
        </div>
        <div className="tech-icons" title="Selenium">
          <SiSelenium />
        </div>
        <div className="tech-icons" title="Turtle">
          <GiTurtle />
        </div>
      </div>
    </div>
  );
};

export default Techstack;
