// 여기다가 만드시면 됩니다!!!
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import TextBox from "../Text";

const MediaCardWrapper = styled.div`
  width: 380px;
  height: 530px;
  border: none;
  background-color: #dcdcdc;
  padding: 10px;
  margin: 20px;
`;

const MediaContentCard = styled.div`
  width: 250px;
  height: 410px;
  border-radius: 8px;
  box-shadow: 0 0 50px 5px rgba(126, 126, 126, 0.3);
  background-color: white;
  padding: 10px;
  margin: 50px 50px 0 50px;
`;

const MediaContent = styled.div`
  width: 250px;
  height: 60px;
`;

const MediaImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  width: 250px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
`;

const MediaCard = (props) => {
  console.log(props);
  return (
    <MediaCardWrapper>
      <MediaContentCard>
        <MediaImage backgroundImage={props.image}></MediaImage>
        <TextBox color="black" fontWeight="bold" fontSize="30px">
          {props.title}
        </TextBox>

        <MediaContent>
          <TextBox color="gray" fontWeight="300px" fontSize="15px">
            {props.children}
          </TextBox>
        </MediaContent>

        <a href={props.link} target={props.linkStyle}>
          <Button backgroundColor={props.backgroundColor} color={props.color}>
            Action
          </Button>
        </a>
      </MediaContentCard>
    </MediaCardWrapper>
  );
};
export default MediaCard;
