import styled from "styled-components";

const StyledFooter = styled.div`
  text-align: center;
  font-size: 13px;
  color: hsl(234, 11%, 52%);
  padding: 30px 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Drag and drop to reorder list</p>
    </StyledFooter>
  );
};

export default Footer;
