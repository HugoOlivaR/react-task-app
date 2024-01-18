import {useState} from 'react'


export function TaskForm({createTask}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(title, description)
        createTask({
          title,
          description
        })
        setTitle("")
        setDescription("")
    }

  return (
    <form onSubmit={handleSubmit} className='bg-slate-400 grid p-5 w-80 rounded-md mx-auto mb-10'>
      <h2 className='text-center text-gray-700 text-2xl mb-4 uppercase font-bold'>Añadir nueva tarea</h2>
      <input
      className='m-2 bg-transparent border-2 rounded-sm focus:outline-none border-gray-700 p-1 placeholder:text-gray-600'
      placeholder="Escribe tu tarea"
      onChange={(e)=>setTitle(e.target.value)}
      value={title}
      />
      <textarea
      className='m-2 bg-transparent border-2 rounded-sm focus:outline-none border-gray-700 p-1 placeholder:text-gray-600'
      placeholder='Escribe la descripcion de la tarea'
      onChange={(e)=>setDescription(e.target.value)}
      value={description}>
      </textarea>
      <button className='text-green-600 w-1/4 mx-auto mt-2 border-2 rounded-sm border-green-600'>Guardar</button>
    </form>
  )
}