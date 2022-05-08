import React from "react";
import styled from "styled-components";
import TextBox from "../Text";
const CardWrapper = styled.div`
  margin: 10px;
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: ${(props) =>
    props.border_radius ? props.border_radius : "10%"}; //
`;

const ColorWrapper = styled.div`
  height: 350px;
  border: 1px solid black;
  background-color: ${(props) => (props.color ? props.color : "white")};
  border-top-left-radius: ${(props) =>
    props.border_radius ? props.border_radius : "10%"};
  border-top-right-radius: ${(props) =>
    props.border_radius ? props.border_radius : "10%"};
  //
`;

const ColorCard = (props) => {
  return (
    <CardWrapper border_radius="40px">
      <ColorWrapper color={props.color} border_radius="10px" />
      <TextBox color={props.color} fontsize="50px" textalign="center">
        {props.color}
      </TextBox>
    </CardWrapper>
  );
};

export default ColorCard;
