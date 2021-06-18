import { useState } from "react";
import UseBusqueda from "../../UseForm/UseBusqueda";
import PortadaBuscada from "../../components/PortadaBuscada/PortadaBuscada";
import Barra from "../../components/Barra/Barra";

const Perfil = () => {
  const { MapDataBaseBuscado } = UseBusqueda();

  return (
    <div>
      <div className="bodyLandPage">
        <div className="barra sticky-top">
          <Barra />
        </div>
        <div className="ColorDePerfilBuscado perfil">
          <div>
            <PortadaBuscada />
          </div>
          <div className="w-100 d-flex flex-column-reverse mt-5">
            {MapDataBaseBuscado}
          </div>
          <div className="mt-5"></div>
        </div>
        <div className="perfilAnuncios"></div>
      </div>
    </div>
  );
};
export default Perfil;
