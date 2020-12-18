import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledTodo = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 20px;
  padding: 20px;
  transition: all 0.5s linear;

  & p {
    margin: auto 0;
  }

  & #icon {
    cursor: pointer;
  }

  & .todo-completed {
    text-decoration: line-through;
  }
`;

const EachTodo = ({ todo, dispatchTodos }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <StyledTodo
      id="each-todo"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div>
        <label htmlFor="checkbox" />
        <input
          id="checkbox"
          type="checkbox"
          checked={todo.complete}
          onChange={() =>
            dispatchTodos({ type: "toggle-complete", id: todo.id })
          }
        />
      </div>
      <p className={todo.complete ? "todo-completed" : null}>
        {todo.description}
      </p>
      {isShown && (
        <FontAwesomeIcon
          id="icon"
          icon={faTimes}
          onClick={() => dispatchTodos({ type: "delete-todo", id: todo.id })}
        />
      )}
    </StyledTodo>
  );
};

export default EachTodo;
