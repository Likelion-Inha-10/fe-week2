import React from "react";
import styled from "styled-components";
import TextBox from "../Text";

const ScreenWrapper = styled.div`
  width: 500px;
  height: 600px;
  background-color: lightgrey;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
`;

const ImageWrapper = styled.div`
  margin: auto;
  padding: 75px;
  width: 250px;
  height: 100px;
  border: 0px black solid;
  border-radius: 20px 20px;
  text-align: center;
  background-color: #b4dfbf;
  background-size: cover;
  textbox: ${(props) => (props.textBox ? props.textBox : "70px")};
`;

const Picture = styled.div`
  margin-left: 25px;
  padding: 75px;
  width: 250px;
  height: 100px;
  border: 0px black solid;
  border-radius: 20px 20px;
  background-image: url(${(props) => (props.picture ? props.picture : "none")});

  background-size: cover;
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
const Box = styled.div`
  margin: auto;
  width: 450px;
  height: 500px;
  border: 0px black solid;
  border-radius: 20px 20px;
  text-align: center;
  background-color: white;
  textbox: ${(props) => (props.textBox ? props.textBox : "70px")};
`;

const Button = styled.div`
  margin: auto;
  width: 500px;
  height: 300px;
  border: 1px black solid;
  border-radius: 20px 20px;
  text-align: center;
  background-color: #b4dfbf;
  textbox: ${(props) => (props.textBox ? props.textBox : "70px")};
`;

const MediaCard = (props) => {
  return (
    <ScreenWrapper>
      <Box>
        <Picture picture={props.picture} />

        <TextBox color={props.color} fontSize="30" fontWeight="300">
          {props.children}
        </TextBox>
      </Box>
    </ScreenWrapper>
  );
};

export default MediaCard;
