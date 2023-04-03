import "./TodoForm.scss";
import { MdPlaylistAddCircle } from "react-icons/md";

export function TodoForm({ submit, todoTitle, setTodoTitle }) {
  return (
    <form className="todo-form" onSubmit={submit}>
      <h1>TODO APP</h1>
      <div className="input-div">
        <input
          type="text"
          placeholder="  add a todo"
          className="mainInput"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit" className="submit">
          <MdPlaylistAddCircle size="24px" color="white" />
        </button>
      </div>
    </form>
  );
}
