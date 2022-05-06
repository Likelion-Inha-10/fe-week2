import React from "react";
import styled from "styled-components";
import TextBox from "../Text";

const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  margin: 10px;
  border-radius: 15px;
  //
`;

const ColorWrapper = styled.div`
  height: 350px;
  border: 1px solid black;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "black")};
  //
`;

const ColorCard = (props) => {
  return (
    <CardWrapper>
      <ColorWrapper backgroundColor={props.backgroundColor} />
      <TextBox color={props.backgroundColor} fontSize="40" textAlign="center" >{props.backgroundColor}</TextBox>
    </CardWrapper>

  );
};

export default ColorCard;
