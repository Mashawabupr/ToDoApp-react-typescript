import React, { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

let App: React.FC = () => {
  let [todosList, setTodo] = useState<{ id: string; text: string }[]>([]);
  let addingTodo = (text: string) => {
    if (text.trim().length > 0) {
      setTodo((prev) => [...prev, { id: String(Math.random()), text }]);
    }
  };
  let handleDelete = (id: string) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <NewTodo onAdding={addingTodo} />
      {todosList.length > 0 && (
        <Todos todosList={todosList} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default App;
