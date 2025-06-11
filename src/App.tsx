import { useState } from "react";
import FilterBar from "./components/FilterBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"All" | "To Do" | "Done">("All");

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "To Do") return !task.completed;
    if (filter === "Done") return task.completed;
    return true;
  });

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 justify-self-center">
      <div className="max-w-2xl mx-auto space-y-4">
        <header>
          <h1 className="text-3xl font-bold">Small Task Tracker</h1>
        </header>
        <TaskForm onAdd={addTask} />
        <FilterBar
          currentFilter={filter}
          onFilterChange={(value) =>
            setFilter(value as "All" | "To Do" | "Done")
          }
        />
        <TaskList tasks={filteredTasks} onToggle={toggleTask} />
      </div>
    </main>
  );
}
