import "./App.css";
import React, { useState, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { uid } from "./utils/uid";
import DisplayTodos from "./DisplayTodos";
import Header from "./Header";
import InputTodo from "./InputTodo";
import Footer from "./Footer";
import styled from "styled-components";

const StyledBackgroundImage = styled.div`
  background-color: hsl(235, 21%, 11%);
  //min-height: 100%;
  background-repeat: repeat-y;
`;

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
`;

// header todo-items & the form could be their own components

// const todoList = [];

const todoList = [
  {
    id: 0,
    description: "10 minutes mediation",
    complete: false,
  },
  {
    id: 1,
    description: "Compelete Todo app on frontend mentor",
    complete: false,
  },
  {
    id: 2,
    description: "Run 5 laps",
    complete: false,
  },
  {
    id: 3,
    description: "Read for 1 hour",
    complete: false,
  },
  {
    id: 4,
    description: "Pick up groceries",
    complete: true,
  },
  {
    id: 5,
    description: "Read for 1 hour",
    complete: false,
  },
  {
    id: 6,
    description: "Pick up groceries",
    complete: true,
  },
  {
    id: 7,
    description: "Read for 1 hour",
    complete: false,
  },
  {
    id: 8,
    description: "Pick up groceries",
    complete: true,
  },
];

const setTodoList = (state, action) => {
  const { description, complete, type, id } = action;

  switch (type) {
    case "new-todo":
      const newTodo = {
        id: uid(),
        description: description,
        complete: complete,
      };

      return [...state, newTodo];

    case "toggle-complete":
      return state.map((todo) => {
        return todo.id === id ? { ...todo, complete: !todo.complete } : todo;
      });

    case "delete-todo":
      return state.filter((todo) => !(todo.id === id));

    case "clear-completed":
      return state.filter((todo) => !todo.complete);
  }
};

const App = () => {
  const [todos, dispatchTodos] = useReducer(setTodoList, todoList);
  const [todo, setTodo] = useState("");
  const [complete, setComplete] = useState(false);

  const handleOnSubmit = (event) => {
    dispatchTodos({
      description: todo,
      complete: complete,
      type: "new-todo",
    });

    setTodo("");
    setComplete(false);

    event.preventDefault();
  };

  return (
    <StyledBackgroundImage>
      <StyledContainer>
        <Header />

        <InputTodo
          handleOnSubmit={handleOnSubmit}
          complete={complete}
          todo={todo}
          setComplete={setComplete}
          setTodo={setTodo}
        />

        <DisplayTodos todoList={todos} dispatchTodos={dispatchTodos} />

        <Footer />
      </StyledContainer>
    </StyledBackgroundImage>
  );
};

export default App;
