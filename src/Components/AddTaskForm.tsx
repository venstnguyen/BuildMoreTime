import { useState } from "react";
import type { Task } from "../Models/Task";
import type { Course } from "../Models/Course";

interface AddTaskFormProps {
  courses: Course[];
  onAddTask: (task: Task) => void;
}

export function AddTaskForm({ courses, onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !courseId || !dueDate) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      courseId,
      title,
      type: "assignment",
      dueDate,
      estimatedMinutes: 60,
      status: "todo",
    };

    onAddTask(newTask);
    setTitle("");
    setCourseId("");
    setDueDate("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "1rem 0" }}>
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        style={{ marginLeft: "0.5rem" }}
      >
        <option value="">Select course</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ marginLeft: "0.5rem" }}
      />
      <button type="submit" style={{ marginLeft: "0.5rem" }}>
        Add task
      </button>
    </form>
  );
}