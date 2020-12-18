import styled from "styled-components";

const StyledInput = styled.div`
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 40px;

  & form {
    display: grid;
    grid-template-columns: 30px 1fr;
  }

  // have to change
  & form input[type="checkbox"] {
    border-radius: 100%;
  }

  & form input[type="text"] {
    border: 0;
    outline: none;
    font-size: 18px;
    font-family: "Josefin Sans", sans-serif;
  }

  @media (min-width: 1000px) {
    & form input[type="text"] {
      font-size: 22px;
    }
  }

  @media (max-width: 400px) {
    & form input[type="text"] {
      font-size: 15px;
    }
  }
`;

const InputTodo = ({
  handleOnSubmit,
  todo,
  complete,
  setComplete,
  setTodo,
}) => {
  return (
    <StyledInput id="input-todo">
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            aria-label="completed"
            type="checkbox"
            name="completed"
            checked={complete}
            onChange={() => setComplete(!complete)}
          />
        </div>

        <div>
          <input
            aria-label="todo"
            type="text"
            name="todo"
            placeholder="Enter todo"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
        </div>
      </form>
    </StyledInput>
  );
};

export default InputTodo;
