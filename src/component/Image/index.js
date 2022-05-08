import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  margin: 8px 8px 8px 8px;
  justify-content: flex-start;
  width: 260px;
  height: 160px;
  border: 1px solid white;
  background-image: url(${(props) => props.backgroundimage});
  background-position: center;
  border-radius: ${(props) =>
    props.border_radius ? props.border_radius : "10%"};

  //
`;

export default StyledImage;
