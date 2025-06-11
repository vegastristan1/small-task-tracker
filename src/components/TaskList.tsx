import React from "react";
import type { Task } from "../App";

type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
};

const TaskList: React.FC<Props> = ({ tasks, onToggle }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-400 mt-4">No tasks found.</p>;
  }

  return (
    <ul className="space-y-2 mt-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between bg-gray-800 p-3 rounded-md"
        >
          <div
            className={`flex-1 cursor-pointer ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => onToggle(task.id)}
          >
            {task.title}
          </div>
          <button
            className="ml-4 text-sm text-blue-400 hover:underline"
            onClick={() => onToggle(task.id)}
          >
            {task.completed ? "Undo" : "Done"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
