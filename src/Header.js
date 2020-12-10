import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;

  & h2 {
    font-size: 45px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  & #icon {
    margin: auto 0;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h2>Todo</h2>
      {/* <FontAwesomeIcon icon={faMoon} /> */}
      <div id="icon">
        <FontAwesomeIcon className="fa-2x" icon={faSun} />
      </div>
    </StyledHeader>
  );
};

export default Header;
