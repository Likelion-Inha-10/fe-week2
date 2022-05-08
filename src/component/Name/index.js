import React from "react";
import styled from "styled-components";

function Name(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <div>{props.skill ? props.skill : props.name}</div>
      props
    </>
  );
}
export default Name;
