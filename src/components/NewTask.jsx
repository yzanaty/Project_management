import React, { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim().length === 0) {
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
