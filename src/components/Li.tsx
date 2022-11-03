import { isTemplateSpan } from "typescript";
import Todo from "../models/Todo";
import classes from "./Li.module.css";
let Li: React.FC<{ li: Todo; onDelete: (el: string) => void }> = (props) => {
  let handleDelete = () => {
    props.onDelete(props.li.id);
  };
  return (
    <div className={classes.item}>
      <li key={props.li.id}>
        {props.li.text}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
};
export default Li;
