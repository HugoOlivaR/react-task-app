import { TaskList } from "./components/TaskList";
import { tasks as data } from "./task";
import { TaskForm } from "./components/TaskForm";
import { useState, useEffect } from "react";
import SideMenu from "./components/SideMenu";
import { LangContext } from "./config/LangContext";
import { ProfileContext } from "./config/profileContext";
import { ThemeContext } from "./config/ThemeContext";
import {darkMain, lightMain} from './style/theme';
import ProfileCard from './components/ProfileCard';  

function App() {
  const [lang, setLang] = useState("es");
  var [profileCardHandler, setProfileCardHandler] = useState(false);
  var [theme, setTheme] = useState("dark");

  if(profileCardHandler === true){
    alert("hola")
  }

  const profileFunction = () => {
    if(profileCardHandler === true){
      setProfileCardHandler(false)
    }else{
      setProfileCardHandler(true)
    }
  }

  const switchTheme = () => {
    if(theme === "dark"){
        setTheme("light")
    }else{
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
        <main className={theme === 'light' ? lightMain : darkMain} id="main">
          <div className="container mx-auto w-4/4">
            <header className="grid grid-cols-2">
              <div className="col-span-1">
                <TaskForm createTask={createTask} theme={theme} />
              </div>
              <nav className="col-span-1">
                <SideMenu switchTheme={switchTheme} profileFunction={profileFunction}/>
                <ProfileContext.Provider value={{profileCardHandler, setProfileCardHandler}}>
                  <ProfileCard profileCardHandler={profileCardHandler} />
                </ProfileContext.Provider>
              </nav>
            </header>
            <TaskList tasks={tasks} deleteTask={deleteTask} theme={theme} />
          </div>
        </main>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
