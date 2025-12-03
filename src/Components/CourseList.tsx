import type { Course } from "../Models/Course";

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <section>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <span style={{ color: course.color, fontWeight: "bold" }}>
              {course.name}
            </span>{" "}
            ({course.code}) — <em>{course.semester}</em>
            <br />
            {course.daysOfTheWeek.join(", ")} {course.startTime}–{course.endTime} (
            {course.location})
          </li>
        ))}
      </ul>
    </section>
  );
}