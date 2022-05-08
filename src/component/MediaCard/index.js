import React from "react";
import styled from "styled-components";
import Button from "../Button";
import TextBox from "../Text";


const CardWrapper1 = styled.div`
  width: 330px;
  height: 400px;
  border: 1px black solid;
  margin: 10px;
  border-radius: 15px;
  }
  //
`;
const TextWrapper = styled.div`
  width: 330px;
  height: 110px;
  margin-left: 10px;
  border-radius: 15px;
  //
`;

const BottonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  //
`;
const PictureWrapper = styled.div`
  height: 210px;
  margin:8px;
  border-radius: 15px;
  border-color: white;
  background-image: url('image/${(props) => (props.backgroundImage ? props.backgroundImage : "green")}');
  background-size: cover;
`;



const MediaCard = (props) => {
  console.log(props)
  return (
    <CardWrapper1>
      <PictureWrapper backgroundImage={props.backgroundImage}></PictureWrapper>
      <TextWrapper>
        <TextBox fontSize="36" fontWeight="bold" >Heading</TextBox>
        <TextBox color="grey" fontSize="20" >This is a short description about the card.</TextBox>
      </TextWrapper>
      <BottonWrapper>
        <Button color="white" backgroundColor="blue" textAlign="center">Action</Button>
      </BottonWrapper>
    </CardWrapper1>

  );
};

export default MediaCard;