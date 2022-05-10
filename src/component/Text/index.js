import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${(props) => (props.font_size ? props.font_size : "16px")} ;
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.font_weight ?  props.font_weight: "bold") };
  text-align:  ${(props) => (props.text_align ?  props.text_align: "center") };
  `;

const TextBox = (props) => {
  return <StyledText color={props.color} font_weight={props.fontWeight} font_size={props.fontSize} text_align={props.align}> {props.children}</StyledText>;

};

export default TextBox;