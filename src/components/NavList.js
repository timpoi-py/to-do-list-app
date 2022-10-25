import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "../css/styles.js";

const NavList = ({ display }) => {
  return (
    <div className={`nav-list ${display}`}>
      <div className="container">
        <ul className={`main-nav`}>
          <Link to={"/"}>Tasks</Link>
          <Link to={"my-day"}>My Day</Link>
          <Link to={"this-week"}>This week</Link>
          <Link to={"important"}>Important</Link>
        </ul>
        <hr className="divider" />
        <div className="projects-wrapper">
          <p>Projects</p>
          <ul role={"list"} className="proj-nav">
            <Link>Something</Link>
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
