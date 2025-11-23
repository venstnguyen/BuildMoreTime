import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Example Courses

const defaultCourses: Course[] = [
  {
    id: "First Class",
    name: "Algorithms",
    code: "CSCI 411",
    color: "Blue",
    semester: "Fall 2024",
    daysOfTheWeek: ["Monday", "Wednesday"],
    startTime: "9:00",
    endTime: "10:00",
    location: "CSM"
  },

  {
    id: "Second Class",
    name: "OS",
    code: "CSCI 457",
    color: "Green",
    semester: "Fall 2024",
    daysOfTheWeek: ["Monday", "Wednesday"],
    startTime: "11:00",
    endTime: "12:00",
    location: "CSM"
  },
];

//Example Task

const defaultTasks: Task[] = [
  {
    id: "task1",
    courseId: ""
  }
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
