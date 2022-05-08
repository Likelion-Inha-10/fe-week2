import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  height: 60px;
  width: 300px;
  border-radius: 28px;
  border: none;
  font-size: 1rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
  cursor: pointer;
`;

const Button = (props) => {
  console.log(props);
  return (
    <StyledButton backgroundColor={props.backgroundColor} color={props.color}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
