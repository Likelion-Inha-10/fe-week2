import React from "react";
import styled from "styled-components";
import TextBox from "../Text";


const PhotoWrapper = styled.div`
  background-image: url(${(props) => (props.src ? props.src : "none")});
  background-size: cover;
  border-radius: 20px;
  height: 200px;
  //
`;
const TextWrapper = styled.div`

margin-top: 10px;
margin-bottom: 10px;
  padding: 10px;
  height: 95px;
  //
`;
const ButtonWrapper = styled.div`
border-radius: 25px;
padding: 17px 17px;
text-align: center;
background: linear-gradient( to left, rgba(255, 255, 255, 0.1), ${(props) => (props.btncolor ? props.btncolor : "white")});

  //
`;
const Main = styled.div`
padding: 10px;
  background-color: white;
  width: 350px;
  height: 400px;
  border-radius: 25px;
  margin-bottom: 10px;
  //
`;

const MediaCard = (props) => {
  return (
    <>
    <Main>
      <PhotoWrapper src={props.src}>
      </PhotoWrapper>
      <TextWrapper>
        <TextBox fontsize="30px" fontweight="800">
          {props.title}
        </TextBox>
        <TextBox fontsize="20px" fontweight="200" color="grey">
          {props.internal}
        </TextBox>
        </TextWrapper>
      <ButtonWrapper btncolor={props.btncolor}>
        <TextBox fontsize="20px" color="white">Action</TextBox>
      </ButtonWrapper>
    </Main>
    </>
  );
};

export default MediaCard;

