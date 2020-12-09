import "./App.css";
import React, { useState, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { uid } from "./utils/uid";

// header todo-items & the form could be their own components

const todoList = [];

const setTodoList = (state, action) => {
  const { todo, completed } = action;

  const newTodo = {
    id: uid(),
    todo: todo,
    completed: completed,
  };

  return [...state, newTodo];
};

const App = () => {
  const [todos, dispatchTodos] = useReducer(setTodoList, todoList);
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleOnSubmit = (event) => {
    dispatchTodos({ todo: todo, completed: completed });

    setTodo("");
    setCompleted(false);

    event.preventDefault();
  };

  return (
    <div id="container">
      <header>
        <h2>Todo</h2>
        {/* <FontAwesomeIcon icon={faMoon} /> */}
        <div id="icon">
          <FontAwesomeIcon className="light-theme" icon={faSun} />
        </div>
      </header>
      <div id="form">
        <form onSubmit={handleOnSubmit}>
          <input
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
          <input
            type="text"
            name="todo"
            placeholder="Enter todo"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
        </form>
      </div>

      <div id="todo-items">
        <div className="todo">
          <input type="checkbox" />
          <p>jog around the park</p>
          <FontAwesomeIcon className="icon" icon={faTimes} />
        </div>
        <div className="todo">
          <input type="checkbox" />
          <p>jog around the park</p>
          <FontAwesomeIcon className="icon" icon={faTimes} />
        </div>
        <div className="todo">
          <input type="checkbox" />
          <p>read for 1 hr</p>
          <FontAwesomeIcon className="icon" icon={faTimes} />
        </div>
        <div className="todo">
          <input type="checkbox" />
          <p>pick up groceries </p>
          <FontAwesomeIcon className="icon" icon={faTimes} />
        </div>
        <div className="todo">
          <input type="checkbox" />
          <p>complete todo app on frontend mentor</p>
          <FontAwesomeIcon className="icon" icon={faTimes} />
        </div>
      </div>
    </div>
  );
};

export default App;
