import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
`;
const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        Precio más ALTO del dia: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        Precio más BAJO del dia: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variación últimas 24hrs: <span>{resultado.CHANGEPCT24HOUR}%</span>
      </Info>
      <Info>
        Última Actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

export default Cotizacion;
