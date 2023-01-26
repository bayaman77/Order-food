import styled from "styled-components";

const Button = ({ children }) => {
  return <StyledButton> {children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background: rgb(126, 42, 10);
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: white;
  margin: 0;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #2c0d00;
  }
  :active{
    background-color: #993108;
  }
`;