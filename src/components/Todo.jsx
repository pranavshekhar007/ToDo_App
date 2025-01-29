import React, { useRef, useState } from "react";
import ToDo_list from "../assets/ToDo_list.png";
import ToDoList from "./ToDoList";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const addTask = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="bg-white w-11/12 max-w-md flex flex-col p-7 min-h-[600px] rounded-2xl">

      {/* Input Box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add Your Task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button
          onClick={addTask}
          className="border-none rounded-full bg-blue-600 w-32 h-14 text-white font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>

      {/* Task List */}
      <ToDoList
        todoList={todoList}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
};

export default Todo;
