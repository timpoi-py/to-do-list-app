import React, { useState, useEffect } from "react";
import "../css/styles.js";

const TodoItem = ({
  setStorageList,
  keyId,
  task,
  dueDate,
  done,
  important,
  project,
}) => {
  const [checkBtn, setCheckBtn] = useState(done ? "complete-btn" : "");
  const [importantBtn, setImportantBtn] = useState(
    important ? "impt-active" : ""
  );

  const updatingStorageList = (setStorageList) => {
    let updatedStorageList = [];

    for (let i = 0; i < localStorage.length; i++) {
      let value = JSON.parse(localStorage.getItem(localStorage.key(i)));
      updatedStorageList.push(value);
    }

    setStorageList(updatedStorageList);
  };

  const deleteInLocalStorage = (e) => {
    localStorage.removeItem(e.target.parentElement.dataset.key);
  };

  const deleteTodoItem = (e) => {
    deleteInLocalStorage(e);
    updatingStorageList(setStorageList);
  };

  const checkBtnClicked = (e) => {
    toggleDone(e);
    checkSetItemDone(e);
    updatingStorageList(setStorageList);
  };

  const importantBtnClicked = (e) => {
    toggleImportant(e);
    checkIfImportant(e);
    updatingStorageList(setStorageList);
  };

  const checkIfImportant = (e) => {
    let item = JSON.parse(
      localStorage.getItem(e.target.parentElement.dataset.key)
    );
    if (item.important === true) setImportantBtn("impt-active");
    else if (item.important === false) setImportantBtn("");
  };

  const toggleImportant = (e) => {
    let item = JSON.parse(
      localStorage.getItem(e.target.parentElement.dataset.key)
    );
    item.important ? (item.important = false) : (item.important = true);
    localStorage.setItem(
      e.target.parentElement.dataset.key,
      JSON.stringify(item)
    );
  };

  const checkSetItemDone = (e) => {
    let item = JSON.parse(
      localStorage.getItem(e.target.parentElement.dataset.key)
    );
    if (item.done === true) setCheckBtn("complete-btn");
    else if (item.done === false) setCheckBtn("");
  };

  const toggleDone = (e) => {
    let item = JSON.parse(
      localStorage.getItem(e.target.parentElement.dataset.key)
    );
    item.done ? (item.done = false) : (item.done = true);
    localStorage.setItem(
      e.target.parentElement.dataset.key,
      JSON.stringify(item)
    );
  };

  return (
    <div data-key={keyId} className="to-do-item">
      <span
        className={`material-symbols-outlined radio-btn ${checkBtn}`}
        onClick={(e) => checkBtnClicked(e)}
      >
        radio_button_unchecked
      </span>
      <div className="content-wrapper">
        <h3>{task}</h3>
        <div className="details-wrapper">
          <p>{dueDate}</p>
          <p>{project}</p>
        </div>
      </div>
      <span
        className="material-symbols-outlined trash-btn"
        onClick={(e) => deleteTodoItem(e)}
      >
        delete
      </span>
      <span
        className={`material-symbols-outlined impt-btn ${importantBtn}`}
        onClick={(e) => importantBtnClicked(e)}
      >
        star
      </span>
    </div>
  );
};

export default TodoItem;
