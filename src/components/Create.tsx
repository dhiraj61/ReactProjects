import { nanoid } from "nanoid";
import React, { useState } from "react";

const Create = (props) => {
  const [title, setTitle] = useState<string>("");
  const submitHandler = (e) => {
    e.preventDefault();
    const todos = props.todos
    const setTodos = props.setTodos

    const newTodo = {
        id:nanoid(),
        title,
        isCompleted:false
    }

    setTodos([...todos,newTodo])
    setTitle("")
  };
  return (
    <div className="w-[60rem] p-16">
      <h1 className="text-7xl font-thin">Set <span className="text-red-400">Reminders</span> for <br />tasks</h1>
      <form onSubmit={submitHandler}>
        <input
        className="border-b w-full outline-none mt-16 text-2xl font-thin"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="title"
          required
        />
        <br />
        <br />
        <button className="bg-transparent border px-8 py-2 text-xl rounded-xl mt-8 active:scale-90">Create ToDo</button>
      </form>
    </div>
  );
};

export default Create;
