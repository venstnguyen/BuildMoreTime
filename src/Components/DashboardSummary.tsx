import type { Task } from "../Models/Task";

interface DashboardSummaryProps {
  tasks: Task[];
}

export function DashboardSummary({ tasks }: DashboardSummaryProps) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "done").length;
  const todo = total - done;

  return (
    <section style={{ marginBottom: "1rem" }}>
      <h2>Dashboard</h2>
      <p>Total tasks: {total}</p>
      <p>Todo: {todo}</p>
      <p>Done: {done}</p>
    </section>
  );
}