import React from "react";
import styled from "styled-components";

const StyledText = styled.div`

  font-size: ${(props) => (props.size ? props.size : "50px")};
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.weight ? props.weight : "80")};
`;

const TextBox = (props) => {
  return <StyledText color={props.color} size={props.fontsize} weight={props.fontweight}>{props.children}</StyledText>;
};

export default TextBox;
