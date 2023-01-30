import styled from "styled-components";

const Button = ({
  children,
  variant = "contained",
  borderStyle = "rounded",
  ...rest
}) => {
  return (
    <StyledButton {...rest} variant={variant} borderStyle={borderStyle}>
      {" "}
      {children}
    </StyledButton>
  );
};

export default Button;

const getBackgroundColor = (props) => {
  return (props) =>
    props.variant === "contained" ? "rgb(126, 42, 10)" : "#fff";
};

const getColor = (props) => {
  return (props) =>
    props.variant === "contained" ? "white" : "rgb(126, 42, 10)";
};
const getBorderRadius = (props) => {
  return (props) => (props.borderStyle === "rounded" ? "25px" : "6px");
};

const StyledButton = styled.button`
  background: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${getColor};
  margin: 0;
  border: 1px solid rgb(126, 42, 10);
  padding: 10px 32px;
  cursor: pointer;
  &:hover {
    background-color: #2c0d00;
    color: white;
    border: 1px solid #2c0d00;
  }
  :active {
    background-color: #993108;
    border: 1px solid #993108;
  }
`;
