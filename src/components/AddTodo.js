import React, { useState, useRef, useEffect } from "react";
import "../css/styles.js";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";

const AddTodo = ({ updateStorageList, activeProject, activeProjectId }) => {
  const [taskItem, setTaskItem] = useState("");
  const [myDay, setMyDay] = useState(true);
  const [dueDate, setDueDate] = useState("");
  const [addBtnDisplay, setAddBtnDisplay] = useState("");
  const [formDisplay, setFormDisplay] = useState("hide-form");

  const inputTask = useRef();

  useEffect(() => {
    inputTask.current.focus();
  }, [formDisplay]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let uuidKey = uuidv4();
    let formValue = {
      key: uuidKey,
      task_item: taskItem,
      to_my_day: myDay,
      due_date: dueDate,
      done: false,
      important: false,
      date_time_created: DateTime.now(),
      project: activeProject,
      projectId: activeProjectId,
    };

    localStorage.setItem(uuidKey, JSON.stringify(formValue));
    setDueDate("");
    e.target.reset();
    toggleFormDisplay();
    addBtnToggle();
    updateStorageList(uuidKey);
  };

  const addBtnClickHandle = () => {
    addBtnToggle();
    toggleFormDisplay();
  };

  const addBtnToggle = () => {
    setAddBtnDisplay((addBtnDisplay) => (addBtnDisplay ? "" : "add-btn-hide"));
  };

  const toggleFormDisplay = () => {
    setFormDisplay((prevFormDisplay) => (prevFormDisplay ? "" : "hide-form"));
  };

  document.onkeydown = (e) => {
    if (e.key == "Escape") {
      if (formDisplay == "") {
        addBtnClickHandle();
      }
    }
  };

  return (
    <div className="add-todo">
      <div className={`add-todo-form ${formDisplay}`}>
        <form onSubmit={handleSubmit}>
          <div className="btn-text-wrapper">
            <span className="material-symbols-outlined complete-btn">
              radio_button_unchecked
            </span>
            <input
              required
              onChange={(e) => setTaskItem(e.target.value)}
              ref={inputTask}
              type="text"
              className="task-item-input"
              id="task-item-input"
              name="task-item"
              placeholder="Add a Task"
            />
          </div>
          <div className="params-wrapper">
            <div className="add-to-myDay-wrapper">
              <input
                onChange={(e) => setMyDay(e.target.checked)}
                defaultChecked
                type="checkbox"
                name="add-to-myDay"
                id="add-to-myDay"
              />
              <label htmlFor="add-to-myDay">Add to My Day</label>
            </div>
            <div className="due-date-wrapper">
              <label htmlFor="due-date">Due on</label>
              <input
                onChange={(e) => setDueDate(e.target.value)}
                type="date"
                name="due-date"
                id="due-date"
                className="due-date"
              />
            </div>
          </div>
        </form>
        <p onClick={addBtnClickHandle}>Cancel</p>
      </div>
      <div className={`add-todo-btn-container ${addBtnDisplay}`}>
        <div className={`add-todo-btn `} onClick={addBtnClickHandle}></div>
      </div>
    </div>
  );
};

export default AddTodo;
