import { TaskList } from "./components/TaskList";
import { tasks as data } from "./task";
import { TaskForm } from "./components/TaskForm";
import { useState, useEffect } from "react";
import ContacctInfo from "./components/ContactInfo";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <main className="bg-zinc-900 h-screen p-5">
      <div className="container mx-auto w-4/4">
        <header className="grid grid-cols-2">
          <div className="col-span-1">
            <TaskForm createTask={createTask} />
          </div>
          <div className="col-span-1">
            <ContacctInfo />
          </div>
        </header>
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </main>
  );
}

export default App;