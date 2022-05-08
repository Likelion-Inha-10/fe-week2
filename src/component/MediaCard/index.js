import React from "react";
import StyledImage from "../Image";
import CardWrapper from "../CardWrapper";
import TextBox from "../Text";
import StyledButton from "../Button";
import StyledCardWrapper from "../CardWrapper";

const MediaCard = (props) => {
  return (
    <StyledCardWrapper border_radius="20px" background_color="transparent">
      <StyledImage
        border_radius="20px"
        backgroundimage={props.backgroundimage}
      ></StyledImage>
      <TextBox
        color="black"
        fontsize="12px"
        fontweight="150"
        textalign="left"
        margin="-10px 15px 0px 15px"
      >
        <h1>{props.title}</h1>
      </TextBox>
      <TextBox
        color="gray"
        fontsize="17px"
        fontweight="100"
        textalign="left"
        margin="-10px 15px 5px 15px"
      >
        {props.content}
      </TextBox>
      <StyledButton backgroundColor={props.backgroundColor} color="white">
        Action
      </StyledButton>
    </StyledCardWrapper>
  );
};

export default MediaCard;
