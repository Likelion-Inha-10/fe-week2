import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "10px")};
  color: ${(props) => (props.color ? props.color : "red")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "100")};
`;

const TextBox = (props) => {
  return (
    <StyledText
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
    >
      {props.children}
    </StyledText>
  );
};

export default TextBox;
