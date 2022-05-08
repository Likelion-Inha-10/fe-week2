// 여기다가 만드시면 됩니다!!!
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  width: 250px;
  height: 290px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

//img
const Image = styled.div`
  background-image: url(${(props) => props.url});
  width: 130px;
  height: 150px;
  margin: 10px;
  border-radius: 10px;
  background-size: cover;
`;

const TextBox = styled.div`
  width: 250px;
  text-align: left;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  color: gray;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 12px;
`;

const Btn = styled.button`
  width: 230px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  color: white;
  border: 0;
`;

const MediaCard = (props) => {
  return (
    <Card>
      <Image url={props.url}></Image>
      <TextBox>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </TextBox>
      <Btn color={props.color}>Action</Btn>
    </Card>
  );
};

export default MediaCard;
