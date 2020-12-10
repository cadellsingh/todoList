import React, { useState, useReducer } from "react";
import { uid } from "./utils/uid";
import DisplayTodos from "./DisplayTodos";
import Header from "./Header";
import InputTodo from "./InputTodo";
import Footer from "./Footer";
import { lightTheme, darkTheme } from "./Themes";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;

  @media (max-width: 800px) {
    max-width: 550px;
  }

  @media (max-width: 600px) {
    max-width: 80%;
  }
`;

const todoList = [];

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

    default:
      return "hi there :)";
  }
};

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [todos, dispatchTodos] = useReducer(setTodoList, todoList);
  const [todo, setTodo] = useState("");
  const [complete, setComplete] = useState(false);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <StyledContainer>
          <Header themeToggler={themeToggler} theme={theme} />

          <InputTodo
            handleOnSubmit={handleOnSubmit}
            complete={complete}
            todo={todo}
            setComplete={setComplete}
            setTodo={setTodo}
          />

          <DisplayTodos todoList={todos} dispatchTodos={dispatchTodos} />

          <Footer todoListLength={todos.length} />
        </StyledContainer>
      </>
    </ThemeProvider>
  );
};

export default App;
