import React from "react";
import Button from "@mui/material/Button";

const ProjectBackbone = (props) => {
  const {
    ProjectTitle,
    ProjectImage,
    ProjectAlt,
    ProjectDesc,
    ProjectLink,
    ProjectTech = [],
  } = props;

  // Function to split the technologies array into columns
  const splitIntoColumns = (arr, columns) => {
    const columnLength = Math.ceil(arr.length / columns);
    return Array.from({ length: columns }, (_, i) =>
      arr.slice(i * columnLength, i * columnLength + columnLength)
    );
  };

  const techColumns = splitIntoColumns(ProjectTech, 3);

  return (
    <div className="project space-y-3">
      <h1 style={{ color: "secondary" }}>{ProjectTitle}</h1>
      <img src={ProjectImage} alt={ProjectAlt} />
      <hr />
      <p>{ProjectDesc}</p>
      <hr />
      {ProjectTech.length > 0 && <h3>Technologies Used:</h3>}
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="space-x-3 text-sm text-left"
      >
        {techColumns.map((column, colIndex) => (
          <ul
            key={colIndex}
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
          >
            {column.map((tech, techIndex) => (
              <li key={techIndex}>{tech}</li>
            ))}
          </ul>
        ))}
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          href={ProjectLink}
          target="_blank"
          style={{ color: "white", backgroundColor: "maroon" }}
        >
          Github Link
        </Button>
      </div>
    </div>
  );
};

export default ProjectBackbone;
