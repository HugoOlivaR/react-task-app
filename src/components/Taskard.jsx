function Taskard({ task, deleteTask }) {
  return (
    <div className="bg-slate-600 my-3 p-2 mx-3 text-center rounded-md">
      <h1 className="text-white text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-sm">{task.description}</p>
      <button
        onClick={() => deleteTask(task.id)}
        className="mt-5 border-2 anim text-red-600 rounded-md border-red-600 hover:border-red-400 ease-in duration-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Taskard;
