import "../../css/styles.js";
import TodoItem from "../TodoItem.js";
import React from "react";
import PagesHeader from "../PagesHeader";

import { DateTime } from "luxon";

const ProjectsPages = ({
  storageList,
  setStorageList,
  projectList,
  setProjectList,
  activeProject,
}) => {
  return (
    <div className="important-pages page">
      <PagesHeader>
        <h2>{activeProject}</h2>
      </PagesHeader>
      {storageList
        .filter((item) => item.project === activeProject)
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

export default ProjectsPages;
