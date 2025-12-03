interface TaskFilterProps {
    value: "all" | "todo" | "done";
    onChange: (value: "all" | "todo" | "done") => void;
  }
  
  export function TaskFilter({ value, onChange }: TaskFilterProps) {
    return (
      <div style={{ margin: "0.5rem 0" }}>
        <span>Filter tasks: </span>
        <button
          type="button"
          onClick={() => onChange("all")}
          style={{ fontWeight: value === "all" ? "bold" : "normal", marginRight: "0.5rem" }}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => onChange("todo")}
          style={{ fontWeight: value === "todo" ? "bold" : "normal", marginRight: "0.5rem" }}
        >
          Todo
        </button>
        <button
          type="button"
          onClick={() => onChange("done")}
          style={{ fontWeight: value === "done" ? "bold" : "normal" }}
        >
          Done
        </button>
      </div>
    );
  }