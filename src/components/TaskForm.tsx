import { useState } from "react";
import type { FormEvent } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export default function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onAdd(title.trim());
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card max-w-sm rounded-md overflow-hidden shadow-lg mt-4">
        <div className="px-3 py-2 flex justify-between gap-2">
          <input
            type="text"
            className="text-white w-full bg-transparent border-gray-600 focus:outline-none"
            placeholder="Add new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            className="bg-cyan-900 text-white w-30 px-3 py-1 rounded-md hover:bg-cyan-700"
          >
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}
