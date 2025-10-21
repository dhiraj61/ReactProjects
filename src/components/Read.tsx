import React from "react";

const Read = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id != id);
    setTodos(filteredTodos);
  };
  const renderTodos = todos.map((todo) => {
    return (
      <li className="bg-gray-900 px-8 py-4 flex justify-between mb-2 rounded" key={todo.id}>
        {todo.title}
        <button
            className="font-thin text-sm text-red-400"
          onClick={() => {
            deleteHandler(todo.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
  return (
    <div className="w-[40rem] p-16 ">
      <h1 className="text-7xl font-thin">
        <span className="text-pink-400">Pending</span> Todos
      </h1>
      <ol className="mt-16 h-[31rem] overflow-auto scrollbar-hide">{renderTodos}</ol>
    </div>
  );
};

export default Read;
