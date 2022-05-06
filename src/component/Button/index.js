import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  height: 50px;
  width: 300px;
  border: 0px;
  border-radius: 20px;
  font-size: 1rem;
  margin-auto;
  margin-top: 30px;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
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
