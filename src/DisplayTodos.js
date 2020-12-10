import { useState } from "react";
import EachTodo from "./EachTodo";
import styled from "styled-components";

const StyledTodoItemsContainer = styled.div`
  background-color: hsl(235, 24%, 19%);
  border-radius: 5px;
  color: hsl(234, 39%, 85%);
  font-size: 18px;
`;

const StyledFilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: hsl(234, 11%, 52%);
`;

const StyledFilterButtons = styled.div`
  display: flex;

  & p,
  & + p {
    cursor: pointer;
  }

  & p:hover,
  & + p:hover {
    color: white;
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
      <StyledTodoItemsContainer>
        {todoList.map((todo) => {
          return (
            <EachTodo dispatchTodos={dispatchTodos} todo={todo} key={todo.id} />
          );
        })}

        <StyledFilterContainer>
          <p>{todoList.length} item(s)</p>
          <StyledFilterButtons>
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
