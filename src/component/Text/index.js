import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "10px")};
  line-height: 1.5;
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
