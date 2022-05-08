import React from "react";
import styled from "styled-components";

const Margin = styled.div`
  height: ${(props) => (props.height ? props.height : "10")}px;
`;

export default Margin;
