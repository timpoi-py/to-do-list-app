import "../../css/styles.js";
import TodoItem from "../TodoItem.js";
import React from "react";
import PagesHeader from "../PagesHeader";

import { DateTime } from "luxon";

const MyDay = ({ storageList, setStorageList }) => {
  return (
    <div className="my-day-page page">
      <PagesHeader>
        <h2>My Day</h2>
      </PagesHeader>
      {storageList
        .filter((item) => item.to_my_day === true)
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
          />
        ))}
    </div>
  );
};

export default MyDay;
