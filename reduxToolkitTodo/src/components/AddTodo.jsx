import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
    <h1 className="text-center text-4xl font-bold mt-8 text-purple-600">Redux Toolkit Todo App</h1>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex justify-center items-center">
      <input
        type="text"
        placeholder="Enter todo..."
        className=" border-2 border-purple-400 px-3 py-2 rounded-lg focus:outline-none focus:border-purple-600 w-80 shadow-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300 shadow-md cursor-pointer"
      >
        Add Todo
      </button>
    </form>
    </>
    
  );
}

export default AddTodo;
