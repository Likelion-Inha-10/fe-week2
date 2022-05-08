import React from "react";
import styled from "styled-components";
import TextBox from "../Text";

const CardWrapper = styled.div`
  margin-top: 10px;
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: 15px 15px;
  text-align: center;
`;

const ColorWrapper = styled.div`
  height: 350px;
  border: 1px solid black;
  border-radius: 15px 15px 0 0;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#1E82CD"};
`;

const ColorCard = (props) => {
  return (
    <CardWrapper>
      <ColorWrapper backgroundColor={props.backgroundColor} />
      <TextBox color={props.color} fontSize="50" fontWeight="400">
        {props.children}
      </TextBox>
    </CardWrapper>
  );
};

export default ColorCard;
