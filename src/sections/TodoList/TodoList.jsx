import "./TodoList.scss";
import { Todo } from "../../components/Todo";

export function TodoList({ todos, remove,edit }) {
  return (
    <div className="todoList">
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} title={todo.title} id={todo.id} remove={remove} edit={edit}/>
        );
      })}
    </div>
  );
}
