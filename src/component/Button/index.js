import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  height: 50px;
  width: 250px;
  border-radius: 8px;
  font-size: ${(props) => props.fSize};
  font-weight: ${(props) => props.fWeight};
  font-color: ${(props) => props.fColor};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#5475DC"};
  color: ${(props) => (props.color ? props.color : "5475DC")};
`;

const Button = (props) => {
  console.log(props);
  return (
    <StyledButton
      backgroundColor={props.backgroundColor}
      color={props.color}
      font-Weight={props.fontWeight}
      font-Size={props.fontSize}
      font-Color={props.color}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
