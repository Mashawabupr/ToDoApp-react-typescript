import Todo from "../models/Todo";
import classes from "./Todos.module.css";
import Li from "./Li";
let Todos: React.FC<{ items: Todo[]; onDelete: (el: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((el) => {
        return <Li li={el} onDelete={props.onDelete} />;
      })}
    </ul>
  );
};
export default Todos;
