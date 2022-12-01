import classes from "./Todos.module.css";
import React, { useContext } from "react";
import Todo from "../models/Todo";
import todoContext from "../store/todoContext";
let Todos: React.FC<{
  todosList: Todo[];
}> = () => {
  let { items, removeTodo } = useContext(todoContext);
  return (
    <ul className={classes.todos}>
      {items.map((item) => {
        return (
          <li key={item.id} className={classes.item}>
            <span>{item.text}</span>
            <button onClick={removeTodo.bind(null, item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
