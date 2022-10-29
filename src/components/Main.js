import React from "react";
import Tasks from "./Main Pages/Tasks";
import MyDay from "./Main Pages/MyDay";
import Important from "./Main Pages/Important";
import ThisWeek from "./Main Pages/ThisWeek";
import ProjectsPages from "./Main Pages/ProjectsPages";
import { Link, Routes, Route } from "react-router-dom";

import "../css/styles.js";

const Main = ({
  storageList,
  setStorageList,
  projectList,
  setProjectList,
  activeProject,
}) => {
  return (
    <div className="main">
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <Tasks
                storageList={storageList}
                setStorageList={setStorageList}
              />
            }
          ></Route>
          <Route
            path="/my-day"
            element={
              <MyDay
                storageList={storageList}
                setStorageList={setStorageList}
              />
            }
          ></Route>
          <Route
            path="/this-week"
            element={
              <ThisWeek
                storageList={storageList}
                setStorageList={setStorageList}
              />
            }
          ></Route>
          <Route
            path="/important"
            element={
              <Important
                storageList={storageList}
                setStorageList={setStorageList}
              />
            }
          ></Route>
          <Route
            path={`/projects/${activeProject}`}
            element={
              <ProjectsPages
                storageList={storageList}
                setStorageList={setStorageList}
                projectList={projectList}
                setProjectList={setProjectList}
                activeProject={activeProject}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
