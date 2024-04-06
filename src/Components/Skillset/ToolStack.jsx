import React from "react";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiUnity,
  SiUnrealengine,
  SiMicrosoftoffice,
  SiArduino,
  SiBlender,
  SiXampp,
  SiPostman,
  SiPostgresql,
  SiXcode,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <div className="techstack">
      <div className="project-heading">
        <h1>
          Tools <strong className="key_words">I use </strong>
        </h1>
      </div>
      <div className="techstack-container">
        <div className="tech-icons" title="Visual Studio Code">
          <SiVisualstudiocode />
        </div>
        <div className="tech-icons" title="Visual Studio">
          <SiVisualstudio />
        </div>
        <div className="tech-icons" title="Unity">
          <SiUnity />
        </div>
        <div className="tech-icons" title="Unreal Engine">
          <SiUnrealengine />
        </div>
        <div className="tech-icons" title="MS Office Suite">
          <SiMicrosoftoffice />
        </div>
        <div className="tech-icons" title="Arduino IDE">
          <SiArduino />
        </div>
        <div className="tech-icons" title="Blender">
          <SiBlender />
        </div>
        <div className="tech-icons" title="XAMPP">
          <SiXampp />
        </div>
        <div className="tech-icons" title="Postman">
          <SiPostman />
        </div>
        <div className="tech-icons" title="pgAdmin 4">
          <SiPostgresql />
        </div>
        <div className="tech-icons" title="Xcode">
          <SiXcode />
        </div>
      </div>
    </div>
  );
};

export default Toolstack;
