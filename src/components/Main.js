import React from "react";
import TodoItem from "./TodoItem";
import "../css/styles.js";

const Main = ({ storageList }) => {
  console.log(storageList);
  return (
    <div className="main">
      {storageList.map((item) => (
        <TodoItem
          key={item.key}
          keyId={item.key}
          task={item.task_item}
          dueDate={item.due_date}
          done={item.done}
          important={item.important}
        />
      ))}
    </div>
  );
};

export default Main;
