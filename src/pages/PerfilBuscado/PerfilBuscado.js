import { useState } from "react";
import UseBusqueda from "../../UseForm/UseBusqueda";
import UseHome from "../../UseForm/UseHome";
import PortadaBuscada from "../../components/PortadaBuscada/PortadaBuscada";
import Barra from "../../components/Barra/Barra";

const Perfil = () => {
  const { MapDataBaseBuscado } = UseBusqueda();
  const { usuario } = UseHome();

  return (
    <div className={usuario.fondo !== 'negro' && "BackgroundColor1" || "BackgroundColor2"}>
      <div className="VistaPrincipal">
        <div className="barra sticky-top  animate__animated animate__bounce">
          <Barra />
        </div>
        <div className="ColorDePerfilBuscado perfil">
          <div>
            <PortadaBuscada />
          </div>
          <div className="w-100 d-flex flex-column-reverse mt-5">
            {MapDataBaseBuscado}
          </div>
        </div>
        <div className="perfilAnuncios"></div>
      </div>
    </div>
  );
};
export default Perfil;
