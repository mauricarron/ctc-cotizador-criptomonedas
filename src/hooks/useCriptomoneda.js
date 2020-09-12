import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  display: block;
  margin-top: 2rem;
  font-family: "Bebas Neue", cursive;
  font-weight: bold;
  font-size: 2.4rem;
  text-transform: uppercase;
  color: #ffffff;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {
  const [state, actualizarState] = useState(stateInicial);

  const SeleccionarCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => actualizarState(e.target.value)} value={state}>
        <option value=""> Seleccionar </option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, actualizarState, SeleccionarCripto];
};

export default useCriptomoneda;
