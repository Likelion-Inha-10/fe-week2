import React from "react";
import styled from "styled-components";
import Text from "../Text";

const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  font-size: 45px;
  color: ${(props) => (props.fColor ? props.fColor : "black")};
`;

const ColorWrapper = styled.div`
  height: 350px;
  border: 1px solid black;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${(props) => (props.bColor ? props.bColor : "black")};
`;

const ColorCard = (props) => {
  return (
    <CardWrapper fColor={props.color}>
      <ColorWrapper bColor={props.color} />
      {props.color}
    </CardWrapper>
  );
};

export default ColorCard;
