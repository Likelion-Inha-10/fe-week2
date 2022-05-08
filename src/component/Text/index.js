import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "10px")};
  font-size: ${(props) => (props.fontsize ? props.fontsize : "10px")};
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.fontweight ? props.fontweight : "100")};
  text-align: ${(props) => (props.textalign ? props.textalign : "left")};
`;

const TextBox = (props) => {
  return (
    <StyledText
      color={props.color}
      fontsize={props.fontsize}
      fontweight={props.fontweight}
      margin={props.margin}
    >
      {props.children}
    </StyledText>
  );
};

export default StyledText;
