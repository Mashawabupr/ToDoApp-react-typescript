import classes from "./NewTodo.module.css";
import React, { useRef } from "react";
type func = {
  onAdding: (text: string) => void;
};
let NewTodo: React.FC<func> = (props) => {
  let valueRef = useRef<HTMLInputElement>(null);
  let handleForm = (event: React.FormEvent) => {
    event.preventDefault();
    let input = valueRef.current!.value;
    props.onAdding(input);
  };
  return (
    <form onSubmit={handleForm} className={classes.form}>
      <input ref={valueRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
