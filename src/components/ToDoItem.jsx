import React, { useState } from "react";
import checked from "../assets/checked.png";
import unChecked from "../assets/unChecked.png";
import delete_icon from "../assets/delete_icon.png"; 
import edit_icon from "../assets/edit_icon.png";

const ToDoItem = ({ task, deleteTask, toggleComplete, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (newText.trim() === "") return;
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center my-3 gap-2 bg-gray-100 p-3 rounded-lg">
      <div className="flex flex-1 items-center">
        <img
          src={task.isComplete ? checked : unChecked}
          alt="Check Icon"
          className="w-7 cursor-pointer"
          onClick={() => toggleComplete(task.id)}
        />

        {isEditing ? (
          <input
            type="text"
            className="ml-4 border rounded px-2 text-gray-700"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()} 
            autoFocus
          />
        ) : (
          <p
            className={`ml-4 text-[17px] ${
              task.isComplete ? "line-through text-gray-500" : "text-slate-700"
            }`}
          >
            {task.text}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            className="bg-green-500 text-white px-2 rounded"
            onClick={handleEdit}
          >
            ✅
          </button>
        ) : (
          <img
            src={edit_icon}
            alt="Edit"
            className="w-5 cursor-pointer"
            onClick={() => setIsEditing(true)}
          />
        )}

        <img
          src={delete_icon}
          alt="Delete"
          className="w-5 cursor-pointer"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
