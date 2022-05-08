import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: 10px;
  margin: 10px;
  margin-left: 10px;
  margin-right: 0px;
  display: inline-block;
  //
`;

const ColorWrapper = styled.div`
  height: 350px;
  border: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${(props) => (props.color ? props.color : "red")};
`;

const Textsection = styled.div`
  height: 80px;
  width: 300px;
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 50px;
  text-color: ${(props) => (props.color ? props.color : "black")};
  //
`;

const ColorCard = (props) => {
  return (
    <CardWrapper>
      <ColorWrapper color={props.color} />
      <Textsection color={props.color}>{props.color}</Textsection>
    </CardWrapper>
  );
};

export default ColorCard;
