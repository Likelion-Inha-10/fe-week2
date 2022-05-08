import React from "react";
import styled from "styled-components";

// 큰 박스
const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: 10px;
  margin: 10px;
  //
`;

// 작은 박스
const ColorWrapper = styled.div`
  height: 350px;
  border: 1px solid black;
  border-bottom-color: ${(props) => props.color};
  border-radius: 10px 10px 0px 0px;
  background-color: ${(props) => props.color};
  //
`;

const ColorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 50px;
  color: ${(props) => props.color};
`;

const ColorCard = (props) => {
  return (
    <CardWrapper>
      <ColorWrapper color={props.color} />
      <ColorText color={props.color}>{props.color}</ColorText>
    </CardWrapper>
  );
};

export default ColorCard;
