// 여기다가 만드시면 됩니다!!!
import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 400px;
  height: 430px;
  border: 1px black solid;
  border-radius: 10px;
  margin: 10px;
  margin-left: 10px;
  margin-right: 0px;
  display: inline-block;
  //
`;

const Picturesection = styled.div`
  height: 200px;
  border: 1px solid black;
  border-radius: 10px;
  width: 360px;
  background-image: url(${(props) => (props.picture ? props.picture : "none")});
  margin-left: auto;
  margin-right: auto;
  margin: 20px;
  background-size: cover;
`;

const Heading = styled.div`
  height: auto;
  text-align: left;
  heading: ${(props) => (props.heading ? props.heading : "nothing")};
  font-weight: bold;
  font-size: 25px;
  padding-left: 20px;
  padding-bottom: 10px;
`;

const Content = styled.div`
  text-align: left;
  font-size: 20px;
  color: grey;
  content: ${(props) => (props.content ? props.content : "nothing")};
  padding-left: 20px;
  padding-bottom: 10px;
  padding-right: 20px;
`;

const Undersection = styled.div`
  height: 50px;
  width: 300px;
  background-color: ${(props) => (props.color ? props.color : "green")};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  color: white;
  border: 1px solid ${(props) => (props.color ? props.color : "green")};
  border-radius: 20px;
  text-align: center;
  padding-top: 12px;
  //
`;

const MediaCard = (props) => {
  return (
    <CardWrapper>
      <Picturesection picture={props.picture} />
      <Heading>{props.heading}</Heading>
      <Content>{props.content}</Content>
      <Undersection color={props.color}>Action</Undersection>
    </CardWrapper>
  );
};

export default MediaCard;
