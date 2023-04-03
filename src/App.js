import "./App.scss";
import { TodoForm } from "./sections/TodoForm";
import { TodoList } from "./sections/TodoList";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function App() {
  const errorToast = (text) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const addToast = () => {
    toast.success('Successfully added', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  const editToast = () => {
    toast.info('Successfully edited', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (todoTitle !== "") {
      setTodos((prev) => {
        return [...prev, { title: todoTitle, id: todos.length + 1 }];
      });
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title: todoTitle,
        })
        .then((res) => {
          addToast();
        });
      setTodoTitle("");
    } else errorToast("Type Something");
  };

  const removeTitle = (id, e) => {
    e.preventDefault();
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        errorToast("Successfully removed");
      });
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: 50,
        },
      })
      .then((res) => {
        setTodos(res.data);
      });
  }, []);
  const edit = (id) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        editToast();
      });
  };
  return (
    <div className="App">
      <div>
        <ToastContainer />
      </div>
      <div className="mainBackgroundColor">
        <TodoForm
          submit={submit}
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
        />
        <div className="todolistDiv">
          <TodoList todos={todos} remove={removeTitle} edit={edit} />
        </div>
      </div>
    </div>
  );
}

export default App;
