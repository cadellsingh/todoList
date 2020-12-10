import styled from "styled-components";

const StyledInput = styled.div`
  background-color: hsl(235, 24%, 19%);
  border-radius: 5px;
  padding: 20px;
  margin: 40px 0;

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
    background-color: hsl(235, 24%, 19%);
    outline: none;
    color: hsl(234, 39%, 85%);
    font-size: 18px;
  }

  & form ::placeholder {
    color: hsl(234, 39%, 85%);
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
    <StyledInput>
      <form onSubmit={handleOnSubmit}>
        <input
          type="checkbox"
          name="completed"
          checked={complete}
          onChange={() => setComplete(!complete)}
        />
        <input
          type="text"
          name="todo"
          placeholder="Enter todo"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
      </form>
    </StyledInput>
  );
};

export default InputTodo;
