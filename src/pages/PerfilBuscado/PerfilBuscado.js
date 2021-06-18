import { useState } from "react";
import UseBusqueda from "../../UseForm/UseBusqueda";
import UseHome from "../../UseForm/UseHome";
import PortadaBuscada from "../../components/PortadaBuscada/PortadaBuscada";
import Barra from "../../components/Barra/Barra";

const Perfil = () => {
  const ColorBack = localStorage.getItem("color");
  const { MapDataBaseBuscado } = UseBusqueda();
  const { colorBolean, setColorBolean, backgroud, setBackgroud } = UseHome();

  return (
    <div className={ColorBack}>
      <div className="VistaPrincipal">
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
