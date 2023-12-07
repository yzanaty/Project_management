import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({
  project,
  tasks,
  onDelete,
  onAddTask,
  onDeleteTask,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="px-5 py-2 text-stone-600 hover:text-red-700 bg-zinc-200 hover:bg-zinc-300 rounded-2xl"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;
