import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todoList, deleteTask, toggleComplete, editTask }) => {
  return (
    <div className="mt-4">
      {todoList.length === 0 ? (
        <p className="text-center text-gray-500">No tasks added yet.</p>
      ) : (
        todoList.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
};

export default ToDoList;
