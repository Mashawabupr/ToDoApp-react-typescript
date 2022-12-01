import classes from "./Todos.module.css";
import React from "react";
let Todos: React.FC<{
  todosList: { id: string; text: string }[];
  onDelete: (id: string) => void;
}> = (props) => {
  return (
    <div className={classes.todos}>
      <ul className={classes.item}>
        {props.todosList.map((item) => {
          return (
            <li key={item.id} className={classes.itemLi}>
              <span>{item.text}</span>
              <button onClick={props.onDelete.bind(null, item.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
