import { useState } from "react";
import EachTodo from "./EachTodo";
import styled from "styled-components";

const StyledTodoItemsContainer = styled.div`
  border-radius: 5px;
  font-size: 18px;

  @media (min-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const StyledFilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 14px;

  @media (min-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }

  @media (max-width: 330px) {
    font-size: 10px;
  }
`;

const StyledFilterButtons = styled.div`
  display: flex;

  & p,
  & + p {
    cursor: pointer;
  }

  & p:nth-child(2) {
    margin-left: 10px;
    margin-right: 10px;
  }

  .clicked {
    color: hsl(220, 98%, 61%);
  }
`;

const DisplayTodos = ({ todoList, dispatchTodos }) => {
  const [filter, setFilter] = useState("All");

  const sortedTodos = (filter) => {
    switch (filter) {
      case "All":
        return todoList;
      case "Active":
        return todoList.filter((todo) => !todo.complete);
      case "Completed":
        return todoList.filter((todo) => todo.complete);
    }
  };

  todoList = sortedTodos(filter);

  return (
    <main>
      <StyledTodoItemsContainer id="display-todos">
        {todoList.map((todo) => {
          return (
            <EachTodo dispatchTodos={dispatchTodos} todo={todo} key={todo.id} />
          );
        })}

        <StyledFilterContainer id="filtered-container">
          <p>{todoList.length} item(s)</p>
          <StyledFilterButtons id="filter-buttons">
            <p
              className={filter === "All" ? "clicked" : null}
              onClick={() => setFilter("All")}
            >
              All
            </p>
            <p
              className={filter === "Active" ? "clicked" : null}
              onClick={() => setFilter("Active")}
            >
              Active
            </p>
            <p
              className={filter === "Completed" ? "clicked" : null}
              onClick={() => setFilter("Completed")}
            >
              Completed
            </p>
          </StyledFilterButtons>
          <p onClick={() => dispatchTodos({ type: "clear-completed" })}>
            Clear Completed
          </p>
        </StyledFilterContainer>
      </StyledTodoItemsContainer>
    </main>
  );
};

export default DisplayTodos;
