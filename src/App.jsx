import { TaskList } from "./components/TaskList";
import { tasks as data } from "./task";
import { TaskForm } from "./components/TaskForm";
import { useState, useEffect } from "react";
import SideMenu from "./components/SideMenu";
import { LangContext } from "./config/LangContext";
import { ThemeContext } from "./config/ThemeContext";
import {darkMain, lightMain} from './style/theme';

function App() {
  const [lang, setLang] = useState("es");
  var [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    if(theme === "dark"){
        document.getElementById('main').className = lightMain;
        setTheme("light")
    }else{
        document.getElementById('main').className = darkMain;
        setTheme("dark")    
    }
  }
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
    <ThemeContext.Provider value={[theme, setTheme]}>
      <LangContext.Provider value={{ lang, setLang }}>
        <main className={darkMain} id="main">
          <div className="container mx-auto w-4/4">
            <header className="grid grid-cols-2">
              <div className="col-span-1">
                <TaskForm createTask={createTask} />
              </div>
              <nav className="col-span-1">
                <SideMenu switchTheme={switchTheme} />
              </nav>
            </header>
            <TaskList tasks={tasks} deleteTask={deleteTask} />
          </div>
        </main>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
