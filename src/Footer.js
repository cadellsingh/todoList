import styled from "styled-components";

const StyledFooter = styled.div`
  text-align: center;
  font-size: 15px;
  color: hsl(234, 11%, 52%);
  padding: 30px 0;
`;

const Footer = ({ todoListLength }) => {
  return (
    <StyledFooter>
      {todoListLength > 1 && <p>Drag and drop to reorder list</p>}
    </StyledFooter>
  );
};

export default Footer;
