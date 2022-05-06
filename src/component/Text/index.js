import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${(props) => props.fSize};
  color: ${(props) => (props.fcolor ? props.fcolor : "black")};
  font-weight: ${(props) => props.fweight};
`;

const TextBox = (props) => {
  return (
    <StyledText
      fcolor={props.color}
      fSize={props.fontSize}
      fweight={props.fontWeight}
    >
      {props.children}
    </StyledText>
  );
};

export default TextBox;
