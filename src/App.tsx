import Todos from "./components/Todos";
import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";
function App() {
  let [item, setItem] = useState<Todo[]>([]);
  let addTodo = (todo: Todo) => {
    setItem((prev) => prev.concat(todo));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={item} />
    </div>
  );
}

export default App;
