import type { Task } from "../Models/Task";
import type { Course } from "../Models/Course";

interface TaskListProps {
  tasks: Task[];
  courses: Course[];
  onToggleStatus: (id: string) => void;
}

export function TaskList({ tasks, courses, onToggleStatus }: TaskListProps) {
  return (
    <section>
      <h2>Upcoming Tasks</h2>
      <ul>
        {tasks.map((task) => {
          const course = courses.find((c) => c.id === task.courseId);
          return (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.status === "done"}
                  onChange={() => onToggleStatus(task.id)}
                />
                <strong>{task.title}</strong> ({task.type}, {task.status})
              </label>
              <br />
              Due: {task.dueDate} — Course: {course?.name || "N/A"}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
