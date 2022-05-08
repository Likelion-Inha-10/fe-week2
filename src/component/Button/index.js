import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 15px 8px 4px 8px;
  position: relative;
  height: 50px;
  width: 260px;
  border-radius: 18px;
  border: 1px solid white;
  font-size: 1rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
`;

export default StyledButton;
