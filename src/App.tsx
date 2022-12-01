import React, { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/Todo";
import todoContext from "./store/todoContext";
let App: React.FC = () => {
  let [todosList, setTodo] = useState<Todo[]>([]);
  let addingTodo = (text: string) => {
    if (text.trim().length > 0) {
      setTodo((prev) => [...prev, { id: String(Math.random()), text }]);
    }
  };
  let handleDelete = (id: string) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <todoContext.Provider
      value={{
        items: todosList,
        addTodo: addingTodo,
        removeTodo: handleDelete,
      }}
    >
      <NewTodo />
      {todosList.length > 0 && <Todos todosList={todosList} />}
    </todoContext.Provider>
  );
};

export default App;
