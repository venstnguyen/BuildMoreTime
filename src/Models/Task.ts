export type TaskType = "assignment" | "exam" | "reading" | "other";

export interface Task { 
  id: string;
  courseId: string;
  title: string;
  type: TaskType;
  dueDate: string;
  estimatedMinutes: number;
  status: "todo" | "done";
  priority?: "low" | "medium" | "high"; 
  notes?: string;                        
}