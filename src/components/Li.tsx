import Todo from "../models/Todo";
let Li: React.FC<{ li: Todo }> = (props) => {

  return <li key={props.li.id}>{props.li.text}</li>;
};
export default Li;
