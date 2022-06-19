import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24")}px;
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  text-align: ${(props) => (props.textAlign ? props.textAlign :"left")};
  text-overflow: ellipsis;
  overflow:hidden;
  width:300px;
`;

const TextBox = (props) => {
  return <StyledText color={props.color} fontSize={props.fontSize} fontWeight={props.fontWeight} textAlign={props.textAlign} > {props.children} </StyledText>;
} ;

export default TextBox;



