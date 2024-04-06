import React from "react";
import Button from "@mui/material/Button";

const ProjectBackbone = (props) => {
  return (
    <div className="project">
      <h1 style={{ color: "secondary" }}>{props.ProjectTitle}</h1>
      <img src={props.ProjectImage} alt={props.ProjectAlt} />
      <hr />
      <p>{props.ProjectDesc}</p>
      <div>
        <Button
          variant="outlined"
          color="secondary"
          href={props.ProjectLink}
          target="_blank"
        >
          Github Link
        </Button>
      </div>
    </div>
  );
};

export default ProjectBackbone;
