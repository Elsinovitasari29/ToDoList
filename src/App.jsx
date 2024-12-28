"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Tab } from "./components/Tab";
import { Task } from "./components/Task";

export default function TaskList() {
  const [activeTab, setActiveTab] = useState("semua");
  const [tasks, setTasks] = useState([]);

  const filteredTasks = useMemo(() => {
    switch (activeTab) {
      case "open":
        return tasks.filter((task) => !task.completed);
      case "closed":
        return tasks.filter((task) => task.completed);
      case "all":
      default:
        return tasks;
    }
  }, [tasks, activeTab]);

  const addTask = (e) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("task");
    const taskTitle = input.value.trim();

    if (!taskTitle) return; // Prevent adding empty tasks

    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    input.value = "";
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    confirm("Kamu yakin mau hapus tugas ini?") &&
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const tabs = [
    {
      status: "semua",
      label: "Semua",
      count: tasks.length,
    },
    {
      status: "open",
      label: "Belum Selesai",
      count: tasks.filter((task) => !task.completed).length,
    },
    {
      status: "closed",
      label: "Selesai",
      count: tasks.filter((task) => task.completed).length,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-12">
      <div className="max-w-2xl rounded-3xl shadow-lg p-6 gap-4 flex flex-col">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Tugas Saya</h1>
          <p className="text-gray-500">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <form className="flex gap-2" onSubmit={addTask}>
          <Input placeholder="Tambahkan tugas baru" name="task" required />
          <Button type="submit">
            <Plus className="w-5 h-5" />
          </Button>
        </form>

        {/* Tabs */}
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <Tab
              key={tab.status}
              {...tab}
              activeTab={activeTab}
              onClick={setActiveTab}
            />
          ))}
        </div>

        {/* Task List */}
        <div className="flex flex-col gap-4 py-2">
          {filteredTasks.length === 0 && (
            <p className="text-gray-400 text-center">Tidak ada tugas</p>
          )}

          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              toggleTask={() => toggleTask(task.id)}
              deleteTask={() => deleteTask(task.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
