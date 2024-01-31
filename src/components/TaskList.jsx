import Taskard from './Taskard';
import {useContext} from 'react';
import {useEffect} from 'react';
import { LangContext } from '../config/LangContext';
import es from "../lang/es.json";
import en from "../lang/en.json";
import { darkNoTaskText, lightNoTaskText } from "../style/theme";

export function TaskList({tasks, deleteTask, theme}) {


  var { lang } = useContext(LangContext);
  const langObj = lang === "es" ? es : en;
  
  if(tasks.length === 0){
    return <h1 className={theme === 'light' ? lightNoTaskText : darkNoTaskText}>{langObj.noTask}</h1>
  }
  
  return (
    <div className='grid grid-cols-4'>
      {tasks.map((task) => (
        <Taskard key={task.id} task={task} deleteTask={deleteTask}/>
      ))}
    </div>
  );
}
