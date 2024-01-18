import Taskard from './Taskard';

export function TaskList({tasks, deleteTask}) {
  
  if(tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }
  
  return (
    <div className='grid grid-cols-3'>
      {tasks.map((task) => (
        <Taskard key={task.id} task={task} deleteTask={deleteTask}/>
      ))}
    </div>
  );
}
