import React from "react";
import TodoItem from "../TodoItem";
import "../../css/styles.js";
import PagesHeader from "../PagesHeader";

import { DateTime } from "luxon";

const ThisWeek = ({ storageList, setStorageList }) => {
  return (
    <div className="this-week-page page">
      <PagesHeader>
        <h2>This Week</h2>
      </PagesHeader>
      {storageList
        .filter((item) => {
          let nowDate = DateTime.now();
          let plusSevenDays = DateTime.now().plus({ days: 7 });
          let dueDateToDateTime = DateTime.fromISO(item.due_date);
          return (
            (nowDate.toISODate() <= dueDateToDateTime.toISODate()) &
            (plusSevenDays.toISODate() > dueDateToDateTime.toISODate())
          );
        })
        .sort(
          (a, b) =>
            DateTime.fromISO(a.date_time_created) -
            DateTime.fromISO(b.date_time_created)
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

export default ThisWeek;
