import React, { useState } from "react";
import type { Course } from "./Models/Course";
import type { Task } from "./Models/Task";
import { CourseList } from "./Components/CourseList";
import { TaskList } from "./Components/TaskList";
import { Layout } from "./Components/Layout"
import { AddCourseForm } from "./Components/AddCourseForm";
import { AddTaskForm } from "./Components/AddTaskForm";
import { TaskFilter } from "./Components/TaskFilter";
import { DashboardSummary } from "./Components/DashboardSummary";

const defaultCourses: Course[] = [
  {
    id: "course1",
    name: "Algorithms",
    code: "CSCI 411",
    color: "#1565c0",
    semester: "Fall 2024",
    daysOfTheWeek: ["Mon", "Wed"],
    startTime: "10:00",
    endTime: "11:30",
    location: "Room 125A",
  },
  {
    id: "course2",
    name: "Database Systems",
    code: "CSCI 432",
    color: "#ff9800",
    semester: "Fall 2024",
    daysOfTheWeek: ["Tue", "Thu"],
    startTime: "13:00",
    endTime: "14:15",
    location: "Room 220",
  },
];

const defaultTasks: Task[] = [
  {
    id: "task1",
    courseId: "course1",
    title: "Homework 1: Graphs",
    type: "assignment",
    dueDate: "2024-11-22",
    estimatedMinutes: 120,
    status: "todo",
    priority: "high",
  },
  {
    id: "task2",
    courseId: "course2",
    title: "Read: Normalization",
    type: "reading",
    dueDate: "2024-11-25",
    estimatedMinutes: 30,
    status: "todo",
  },
];

function App() {
  const [courses, setCourses] = useState<Course[]>(defaultCourses);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [taskFilter, setTaskFilter] = useState<"all" | "todo" | "done">("all");

const filteredTasks = tasks.filter((task) => {
  if (taskFilter === "all") return true;
  return task.status === taskFilter;
});

function handleToggleTaskStatus(id: string) {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === "todo" ? "done" : "todo",
          }
        : task
    )
  );
}

  return (
    <Layout>
      <DashboardSummary tasks={tasks} />

      <AddCourseForm
        onAddCourse={(course) => setCourses((prev) => [...prev, course])}
      />
      <CourseList courses={courses} />

      <AddTaskForm
        courses={courses}
        onAddTask={(task) => setTasks((prev) => [...prev, task])}
      />
      <TaskList tasks={tasks} courses={courses} onToggleStatus={handleToggleTaskStatus} />

      <TaskFilter value={taskFilter} onChange={setTaskFilter} />


    </Layout>
  );
}

export default App;
