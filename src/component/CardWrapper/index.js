import React from "react";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  display: flex;
  box-shadow: 2px 2px 2px 2px;
  flex-direction: column;
  margin: 10px;
  width: 280px;
  height: 350px;
  border: 1px white solid;
  border-radius: ${(props) =>
    props.border_radius ? props.border_radius : "10%"};
  background-color: ${(props) =>
    props.background_color ? props.background_color : "white"}; //
`;

export default StyledCardWrapper;
