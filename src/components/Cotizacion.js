import React from "react";

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <div>
      <p>
        El precio es: <span>{resultado.PRICE}</span>
      </p>
      <p>
        Precio más ALTO del dia: <span>{resultado.HIGHDAY}</span>
      </p>
      <p>
        Precio más BAJO del dia: <span>{resultado.LOWDAY}</span>
      </p>
      <p>
        Variación últimas 24hrs: <span>{resultado.CHANGEPCT24HOUR}%</span>
      </p>
      <p>
        Última Actualización: <span>{resultado.LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Cotizacion;
