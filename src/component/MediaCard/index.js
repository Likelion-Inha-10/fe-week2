import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Image from "../Image"
import TextBox from "../Text";
import Margin from "../Margin";

const CardWrapper = styled.div`
  width: 400px;
  height: 430px;
  border: 1px black solid;
  border-radius: 30px;
  margin-bottom: 10px;
  text-align: center;
  justify-content:center;
  align-items: center;
`;

const StyledImage = styled.div`
  width : 350px;
  height : 300px;
  border : 1px solid black;
  margin: auto;
  border-radius: 30px;
  background-image: url(${props => props.image? props.image : ""});
  background-size: cover;
  align-items: center;
`;


const MediaCard = (props) => {

  return (<CardWrapper>
    <Margin height="15" />
    <StyledImage image = {props.image} />
    <Margin height="5" />
      <TextBox fontSize2={props.fontSize2} >{props.head}</TextBox>
      <Margin height="5" />
    <TextBox fontSize1={props.fontSize1} >{props.content}</TextBox>
    <Margin height="5" />
    <Button backgroundColor="skyblue" >ACTION</Button>
  </CardWrapper>);
    
};

export default MediaCard;

