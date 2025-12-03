import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div style={{ minHeight: "100vh", fontFamily: "sans-serif" }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#111827",
          color: "white",
        }}
      >
        <div style={{ fontWeight: 600 }}>Course & Learning Planner</div>
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "1rem",
              margin: 0,
              padding: 0,
            }}
          >
            <li>Dashboard</li>
            <li>Courses</li>
            <li>Tasks</li>
            <li>Calendar</li>
          </ul>
        </nav>
      </header>

      <main style={{ padding: "1.5rem" }}>{children}</main>
    </div>
  );
}



