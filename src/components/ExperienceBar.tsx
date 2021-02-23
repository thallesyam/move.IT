import React from "react";

const ExperienceBar = () => {
  return (
    <header className="experience-bar ">
      <span>0 px</span>
      <div>
        <div style={{ width: "50%" }} />

        <span className="current-experience" style={{ left: "50%" }}>
          300px
        </span>
      </div>
      <span>600 px</span>
    </header>
  );
};

export default ExperienceBar;