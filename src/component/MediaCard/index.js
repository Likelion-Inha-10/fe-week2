// 여기다가 만드시면 됩니다!!!

import React from "react";
import styled from "styled-components";
import Margin from "../Margin";
import TextBox from "../Text";
import Button from "../Button";
import backgroundImage from "../../Images/seventeen.jpg";

const ScreenWrapper = styled.div`
  width: 360px;
  height: 420px;
  border: 1px grey solid;
  border-radius: 16px;
  text-align: center;
  box-shadow: 3px 3px grey;
`;

const ImageWrapper = styled.div`
  width: 340px;
  height: 200px;
  margin: auto;
  background-color: black;
  background-image: url(${(props) => backgroundImage});
  border-radius: 16px;
`;

const Title = styled(TextBox)``;

const Body = styled(TextBox)``;

const ButtonText = styled(TextBox)`
  &:hover {
    letter-spacing: 10px;
  }
`;

const MediaCard = (props) => {
  return (
    <ScreenWrapper>
      <Margin height="10" />
      <ImageWrapper background-image="" />
      <Margin height="6" />
      <Title fontSize="36">This is MEI</Title>
      <Margin height="10" />
      <Body fontSize="24" fontWeight="400" letterSpacing="6" color="#78221d">
        Seize the Day! lol
      </Body>
      <Margin height="28" />
      <Button backgroundColor="#78221d">
        <ButtonText color="#fff" fontWeight="400" letterSpacing>
          FollowMe
        </ButtonText>
      </Button>
    </ScreenWrapper>
  );
};
export default MediaCard;
