import React from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Display = (props) => {
  return <StyledDisplay>{props.children}</StyledDisplay>;
};

export default Display;
