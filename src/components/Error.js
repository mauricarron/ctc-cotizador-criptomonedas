import React from "react";
import styled from "@emotion/styled";

const MensajeError = styled.p`
  padding: 1rem;
  font-family: "Bebas Neue", cursive;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  background-color: #b7322c;
  color: #ffffff;
  border-radius: 10px;
`;

const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

export default Error;
