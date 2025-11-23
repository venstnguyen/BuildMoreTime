export type Tasktype = "assignment" | "exam" | "reading" | "other";

export interface Task { 
    id: string;
    courseId: string;
    title: string;
    type: Tasktype;
    dueDate: string;
    estimatedTime: number;
    status: "todo" | "done";
    priority: "low" | "medium" | "high";
    notes: string; 
}