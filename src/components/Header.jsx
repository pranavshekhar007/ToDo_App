import React from "react";
import ToDo_list from "../assets/ToDo_list.png";

function Header() {
  return (
    <div className="flex items-center mt-7 gap-2">
        <img src={ToDo_list} alt="" className="w-8" />
        <h1 className="text-3xl font-semibold italic text-white">To-Do List</h1>
      </div>
  );
}

export default Header;
