import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => props.fontWeight};
`;

const TextBox = (props) => {
  return (
    <StyledText
      color={props.color}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
    >
      {props.children}
    </StyledText>
  );
};

export default TextBox;
