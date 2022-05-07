import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: 10px;
  color: ${(props) => (props.color ? props.color : "black")};
`;

const TextBox = (props) => {
  return <StyledText color={props.color}>{props.children}</StyledText>;
};

export default TextBox;
