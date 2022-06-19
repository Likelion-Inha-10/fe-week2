import React from "react";
import styled from "styled-components";
import TextBox from "../Text";

const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => props.fontWeight};
`;

const ColorWrapper = styled.div`
  height: 350px;
  border: none;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "black"};
`;

const ColorCard = (props) => {
  return (
    <CardWrapper>
      <ColorWrapper backgroundColor={props.color} />
      <TextBox color={props.color} fontWeight="400" fontSize="45px">
        {props.color}
      </TextBox>
    </CardWrapper>
  );
};
export default ColorCard;
