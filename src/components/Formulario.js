import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #ffffff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [listaCripto, guardarListaCripto] = useState([]);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "ARS", nombre: "Peso de Argentina" },
  ];

  const [moneda, , SeleccionarMonedas] = useMoneda(
    "Elije tu moneda: ",
    "",
    MONEDAS
  );
  const [criptomoneda, , SeleccionarCripto] = useCriptomoneda(
    "Elije tu Criptomoneda",
    "",
    listaCripto
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      guardarListaCripto(resultado.data.Data);
    };
    consultarApi();
  }, []);

  return (
    <form>
      <SeleccionarMonedas />
      <SeleccionarCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
