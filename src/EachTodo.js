import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledTodo = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 20px;
  padding: 20px;
  border-bottom: 1px solid hsl(233, 14%, 35%);

  & p {
    margin: auto 0;
  }

  & #icon {
    cursor: pointer;
  }

  & .todo-completed {
    text-decoration: line-through;
    color: hsl(234, 11%, 52%);
  }
`;

const EachTodo = ({ todo, dispatchTodos }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <StyledTodo
      data-info={JSON.stringify(todo)}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => dispatchTodos({ type: "toggle-complete", id: todo.id })}
      />
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
