import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  & h2 {
    font-size: 45px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  & #icon {
    margin: auto 0;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 40px;
    }
  }
`;

const Header = ({ themeToggler, theme }) => {
  return (
    <StyledHeader id="header">
      <h2>Todo</h2>
      <div id="icon">
        <FontAwesomeIcon
          onClick={themeToggler}
          className="fa-2x"
          icon={theme === "light" ? faMoon : faSun}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
