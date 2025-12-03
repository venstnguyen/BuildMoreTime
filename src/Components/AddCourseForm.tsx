import { useState } from "react";
import type { Course } from "../Models/Course";

interface AddCourseFormProps {
  onAddCourse: (course: Course) => void;
}

export function AddCourseForm({ onAddCourse }: AddCourseFormProps) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !code.trim()) return;

    const newCourse: Course = {
      id: crypto.randomUUID(),
      name,
      code,
      color: "#3b82f6",
      semester: "Fall 2024",
      daysOfTheWeek: [],
      startTime: "09:00",
      endTime: "10:00",
    };

    onAddCourse(newCourse);
    setName("");
    setCode("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        placeholder="Course name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ marginLeft: "0.5rem" }}
      />
      <button type="submit" style={{ marginLeft: "0.5rem" }}>
        Add course
      </button>
    </form>
  );
}
