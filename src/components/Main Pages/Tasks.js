import React from "react";
import TodoItem from "../TodoItem";
import PagesHeader from "../PagesHeader";
import "../../css/styles.js";
import { DateTime } from "luxon";

const Tasks = ({ storageList, setStorageList }) => {
  return (
    <div className="tasks-page page">
      <PagesHeader>
        <h2>Tasks</h2>
      </PagesHeader>

      {storageList
        .filter((item) => item.key && true)
        .sort(
          (a, b) =>
            DateTime.fromISO(b.date_time_created) -
            DateTime.fromISO(a.date_time_created)
        )
        .sort((a, b) => a.done - b.done)
        .map((item) => (
          <TodoItem
            setStorageList={setStorageList}
            key={item.key}
            keyId={item.key}
            task={item.task_item}
            dueDate={item.due_date}
            done={item.done}
            important={item.important}
            project={item.project}
          />
        ))}
    </div>
  );
};

export default Tasks;
