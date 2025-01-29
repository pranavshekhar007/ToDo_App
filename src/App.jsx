import React from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center py-10">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
