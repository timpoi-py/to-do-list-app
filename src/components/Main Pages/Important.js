import "../../css/styles.js";
import TodoItem from "../TodoItem";
import React from "react";
import PagesHeader from "../PagesHeader";

import { DateTime } from "luxon";

const Important = ({ storageList, setStorageList }) => {
  return (
    <div className="important-pages page">
      <PagesHeader>
        <h2>Important</h2>
      </PagesHeader>
      {storageList
        .filter((item) => item.important === true)
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

export default Important;
