import { useRef } from "react";
import Todo from "../models/Todo";
let NewTodo: React.FC<{ onAddTodo: (todo: Todo) => void }> = (props) => {
  let inputRef = useRef<HTMLInputElement>(null);
  let handleForm = (event: React.FormEvent) => {
    event.preventDefault();
    let enteredValue = inputRef.current!.value;
    if (enteredValue.trim().length > 0) {
      
      
      props.onAddTodo({ id: String(Math.random()), text: enteredValue });
    }
  };
  return (
    <form onSubmit={handleForm}>
      <input type="text" ref={inputRef} />
      <button>Submit</button>
    </form>
  );
};
export default NewTodo;
