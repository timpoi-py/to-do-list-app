import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/styles.js";

const Projects = ({
  projectList,
  setProjectList,
  activeProject,
  setActiveProject,
  setStorageList,
  setActiveProjectId,
}) => {
  const getUpdateList = (e) => {
    let projectId = e.target.nextSibling.dataset.id;
    let list = JSON.parse(localStorage.getItem("projList"));
    let updatedList = list.filter((item) => item._id !== projectId);
    localStorage.setItem("projList", JSON.stringify(updatedList));
    return updatedList;
  };

  const removeItemsOfProject = (e) => {
    let projectId = e.target.nextSibling.dataset.id;
    let keyList = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(key));
      if (item.projectId === projectId) {
        keyList.push(key);
      }
    }
    keyList.forEach((key) => localStorage.removeItem(key));
  };

  const deleteProject = (e) => {
    let projectId = e.target.nextSibling.dataset.id;
    removeItemsOfProject(e);
    setStorageList((prevList) =>
      prevList.filter((item) => item.projectId !== projectId)
    );
    setProjectList(getUpdateList(e));
  };

  const projectClickHandler = (e) => {
    setActiveProject(e.target.textContent);
    setActiveProjectId(e.target.dataset.id);
  };

  return (
    <div className="projects">
      {projectList
        ? projectList.map((item) => (
            <div className="projects-content" key={`${item._id}`}>
              <span
                className="material-symbols-outlined trash-btn"
                onClick={(e) => deleteProject(e)}
              >
                delete
              </span>
              <Link
                onClick={(e) => projectClickHandler(e)}
                to={`/projects/${item.projName}`}
                data-id={item._id}
              >
                {item.projName}
              </Link>
            </div>
          ))
        : null}
    </div>
  );
};

export default Projects;
