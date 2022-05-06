import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  height: 50px;
  width: 314px;
  border-radius: 17px;
  font-size: 1rem;
  background: linear-gradient(90deg,blue, white);
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign :"left")};
`;

const Button = (props) => {
  console.log(props);
  return (
    <StyledButton backgroundColor={props.backgroundColor} color={props.color} textAlign={props.textAlign}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
