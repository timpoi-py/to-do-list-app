import React, { useState } from "react";
import "../css/styles.js";

const NavList = ({ display }) => {
  return (
    <div className={`nav-list ${display}`}>
      <div className="container">
        <ul className={`main-nav`}>
          <li>Tasks</li>
          <li>My Day</li>
          <li>This week</li>
          <li>Important</li>
        </ul>
        <hr className="divider" />
        <div className="projects-wrapper">
          <p>Projects</p>
          <ul role={"list"} className="proj-nav">
            <li>Something</li>
          </ul>
        </div>
        <p className="add-project-btn ">
          <span>+</span> Add Project
        </p>
      </div>
    </div>
  );
};

export default NavList;
