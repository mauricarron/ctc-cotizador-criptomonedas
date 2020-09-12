import React, { Fragment, useState } from "react";

const useMoneda = () => {
  const [state, actualizarState] = useState("");
  const Seleccionar = () => (
    <Fragment>
      <label>Moneda</label>
      <select>
        <option value="ARS">Peso Argentino</option>
      </select>
    </Fragment>
  );

  return [state, actualizarState, Seleccionar];
};

export default useMoneda;
