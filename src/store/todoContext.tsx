import React from "react";
import Todo from "../models/Todo";
let todoContext = React.createContext<{
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});
export default todoContext;
