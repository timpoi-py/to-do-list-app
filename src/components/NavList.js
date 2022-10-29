import React, { useEffect, useRef, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "../css/styles.js";
import { v4 as uuidv4 } from "uuid";
import Projects from "./Projects.js";

const NavList = ({
  display,
  projectList,
  setProjectList,
  activeProject,
  setActiveProject,
  setStorageList,
  setActiveProjectId,
}) => {
  const [projInputDisplay, setProjInputDisplay] = useState("proj-input-hide");
  const addProjectInputRef = useRef();
  const [projItem, setProjItem] = useState("");

  useEffect(() => {
    addProjectInputRef.current.focus();
  }, [projInputDisplay]);

  const updateLocalStorage = (projList) => {
    let key = uuidv4();
    let itemsToAdd = {
      _id: `${key}`,
      projName: `${projList}`,
    };

    let items = JSON.parse(localStorage.getItem("projList"));
    let dict = [...items, itemsToAdd];
    localStorage.setItem("projList", JSON.stringify(dict));
    setProjectList((prev) => [...prev, itemsToAdd]);
  };

  const addProjectSubmit = (e) => {
    e.preventDefault();
    updateLocalStorage(projItem);
    setProjInputDisplay((prevProjInputDisplay) =>
      prevProjInputDisplay === "" ? "proj-input-hide" : ""
    );
    e.target.reset();
  };

  const addProjectClickHandler = () => {
    setProjInputDisplay((prevProjInputDisplay) =>
      prevProjInputDisplay === "" ? "proj-input-hide" : ""
    );
  };

  const linkClickHandler = () => {
    setActiveProject("");
    setActiveProjectId("");
  };

  return (
    <div className={`nav-list ${display}`}>
      <div className="container">
        <ul className={`main-nav`}>
          <Link onClick={() => linkClickHandler()} to={"/"}>
            Tasks
          </Link>
          <Link onClick={() => linkClickHandler()} to={"my-day"}>
            My Day
          </Link>
          <Link onClick={() => linkClickHandler()} to={"this-week"}>
            This week
          </Link>
          <Link onClick={() => linkClickHandler()} to={"important"}>
            Important
          </Link>
        </ul>
        <hr className="divider" />
        <div className="add-project-wrapper">
          <p className="add-project-btn" onClick={addProjectClickHandler}>
            <span>+</span> Add Project
          </p>
          <form onSubmit={addProjectSubmit}>
            <input
              onChange={(e) => {
                setProjItem(() => e.target.value);
              }}
              ref={addProjectInputRef}
              type="text"
              className={`add-project-input ${projInputDisplay}`}
            />
          </form>
        </div>
        <div className="projects-wrapper">
          <p>Projects</p>
          <ul role={"list"} className="proj-nav">
            <Projects
              projectList={projectList}
              setProjectList={setProjectList}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
              setStorageList={setStorageList}
              setActiveProjectId={setActiveProjectId}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavList;
