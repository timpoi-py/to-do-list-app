import "./css/styles.js";

import Header from "./components/Header";
import NavList from "./components/NavList.js";
import { useRef, useState } from "react";
import Main from "./components/Main.js";
import AddTodo from "./components/AddTodo.js";

const App = () => {
  const [display, setDisplay] = useState("");

  const toggleDisplay = () => {
    setDisplay((prevDisplay) => (!prevDisplay ? "show" : ""));
  };

  const getInitialStorageList = () => {
    let initialStorageList = [];
    if (localStorage.length == 0) return initialStorageList;
    else {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (!(key === "projList")) {
          initialStorageList.push(JSON.parse(localStorage.getItem(key)));
        }
      }
      return initialStorageList;
    }
  };

  const [storageList, setStorageList] = useState(getInitialStorageList());

  const updateStorageList = (uuidKey) => {
    let lastAdded = JSON.parse(localStorage.getItem(uuidKey));
    setStorageList((prevStorageList) => [...prevStorageList, lastAdded]);
  };

  const getInitialPorjectList = () => {
    let list = [];
    if (localStorage.getItem("projList") === null) {
      localStorage.setItem("projList", JSON.stringify([]));
      return list;
    } else {
      list = JSON.parse(localStorage.getItem("projList"));
      return list;
    }
  };

  const [projectList, setProjectList] = useState(getInitialPorjectList());
  const [activeProject, setActiveProject] = useState("");
  const [activeProjectId, setActiveProjectId] = useState("");

  return (
    <div className="App">
      <Header toggleDisplay={toggleDisplay} />
      <NavList
        display={display}
        projectList={projectList}
        setProjectList={setProjectList}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        setStorageList={setStorageList}
        setActiveProjectId={setActiveProjectId}
      />
      <Main
        storageList={storageList}
        setStorageList={setStorageList}
        projectList={projectList}
        setProjectList={setProjectList}
        activeProject={activeProject}
      />
      <AddTodo
        updateStorageList={updateStorageList}
        activeProject={activeProject}
        activeProjectId={activeProjectId}
      />
    </div>
  );
};

export default App;
