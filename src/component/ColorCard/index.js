import React from "react";
import styled from "styled-components";
import TextBox from "../Text";

const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: 20px 20px 0 0;
`;

const ColorWrapper = styled.div`
  height: 350px;
  border: 1px solid none;
  border-radius: 20px 20px 0 0;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

const ColorCard = (props) => {
  return (
    <CardWrapper>
      <ColorWrapper
        color={props.color}
        backgroundColor={props.backgroundColor}
      />
      <TextBox fontSize={props.fontSize} fontWeight={props.fontWeight}>
        {props.children}
      </TextBox>
    </CardWrapper>
  );
};

export default ColorCard;
