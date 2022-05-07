import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  //
`;

const ColorWrapper = styled.div`
  height: 350px;
  border: 1px solid black;
  //
`;

const ColorCard = (props) => {
  return (
    <CardWrapper>
      <ColorWrapper color={props.color} />
    </CardWrapper>
  );
};

export default ColorCard;
