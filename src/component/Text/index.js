import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "-1.6"}px;
  text-align: center;
`;

const TextBox = (props) => {
  return (
    <StyledText
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      letterSpacing={props.letterSpacing}
    >
      {props.children}
    </StyledText>
  );
};

export default TextBox;
