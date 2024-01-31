import { useState, useContext } from "react";
import { LangContext } from '../config/LangContext';
import {lightTaskForm, darkTaskForm} from '../style/theme';
import es from "../lang/es.json";
import en from "../lang/en.json";

export function TaskForm({ createTask, theme }) {
  var { lang } = useContext(LangContext);
  const langObj = lang === "es" ? es : en;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={theme === 'light' ? lightTaskForm : darkTaskForm}
    >
      <h2 className="text-center text-gray-700 text-2xl mb-4 uppercase font-bold">
        {langObj.title}
      </h2>
      <input
        className="m-2 bg-transparent border-2 rounded-sm focus:outline-none border-gray-700 p-1 placeholder:text-gray-600"
        placeholder={langObj.task}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        className="m-2 bg-transparent border-2 rounded-sm focus:outline-none border-gray-700 p-1 placeholder:text-gray-600"
        placeholder={langObj.description}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="text-green-600 w-1/4 mx-auto mt-2 border-2 rounded-sm border-green-600">
      {langObj.save}
      </button>
    </form>
  );
}
