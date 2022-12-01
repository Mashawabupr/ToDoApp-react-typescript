import classes from "./NewTodo.module.css";
import React, { useRef, useContext } from "react";
import todoContext from "../store/todoContext";

let NewTodo: React.FC = () => {
  let { addTodo } = useContext(todoContext);
  let valueRef = useRef<HTMLInputElement>(null);
  let handleForm = (event: React.FormEvent) => {
    event.preventDefault();
    let input = valueRef.current!.value;
    addTodo(input);
  };
  return (
    <form onSubmit={handleForm} className={classes.form}>
      <input ref={valueRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
