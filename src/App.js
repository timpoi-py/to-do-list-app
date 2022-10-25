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
        initialStorageList.push(JSON.parse(localStorage.getItem(key)));
      }
      return initialStorageList;
    }
  };

  const [storageList, setStorageList] = useState(getInitialStorageList());

  const updateStorageList = (uuidKey) => {
    let lastAdded = JSON.parse(localStorage.getItem(uuidKey));
    setStorageList((prevStorageList) => [...prevStorageList, lastAdded]);
  };

  return (
    <div className="App">
      <Header toggleDisplay={toggleDisplay} />
      <NavList display={display} />
      <Main storageList={storageList} setStorageList={setStorageList} />
      <AddTodo updateStorageList={updateStorageList} />
    </div>
  );
};

export default App;
