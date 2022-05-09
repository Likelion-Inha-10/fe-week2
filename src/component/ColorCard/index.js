import React from "react";
import styled from "styled-components";
import TextBox from "../Text";


const CardWrapper = styled.div`
  border-radius: 3%;
  width: 300px;
  height: 430px;
  border: 1px black solid;
  text-align: center;
  margin: 5px;
  
`;

const ColorWrapper = styled.div`
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
  height: 350px;
  border: 1px solid ${(props) =>
    props.color ? props.color : "black"};;
  background-color: ${(props) =>
    props.color ? props.color : "white"};
  
`;

const ColorCard = (props) => {
  return (

    <CardWrapper>
      <ColorWrapper color={props.color}/>
      <TextBox fontweight="550" color={props.color}>{props.color}</TextBox>
    </CardWrapper>

  );
};

export default ColorCard;
