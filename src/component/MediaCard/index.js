// 여기다가 만드시면 됩니다!!!

import React from "react";
import styled from "styled-components";
import TextBox from "../Text";
import Button from "../Button";

const CardWrapper = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 20px;
  box-shadow: 0px 0px 50px 1px rgb(0 0 0 / 20%);
  margin: 10px;
  font-size: 45px;
  background-color: white;
  padding: 10px;
  line-height: 120%;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 180px;
  border-radius: 20px;
  margin: auto;
  background-image: url(${(props) => (props.bImage ? props.bImage : "white")});
  background-size: 100% 100%;
`;

const MediaCard = (props) => {
  return (
    <CardWrapper>
      <ImageWrapper bImage={props.bImage}></ImageWrapper>
      <TextBox fontSize="27px" fontWeight="bold">
        {props.title}
      </TextBox>
      <TextBox color="gray" fontSize="15px" fontWeight="lighter">
        {props.text}
      </TextBox>
      <Button backgroundColor={props.backgroundColor}>Action</Button>
    </CardWrapper>
  );
};

export default MediaCard;
