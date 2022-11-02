import Todo from "../models/Todo";
import Li from "./Li";
let Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((el) => {
        return <Li li={el} />;
      })}
    </ul>
  );
};
export default Todos;
