import { useState, useEffect } from "react";
import axios from "axios";
import { Card, NavDropdown, Spinner } from "react-bootstrap";
import UseBusqueda from "../../UseForm/UseBusqueda";
import UseHome from "../../UseForm/UseHome";
import PortadaBuscada from "../../components/PortadaBuscada/PortadaBuscada";

const Perfil = () => {
  const [input, setInput] = useState({});
  const token = localStorage.getItem("token");
  const { MapDataBaseBuscado } = UseBusqueda();

  return (
    <div className="ColorDePerfil">
      <div>
        <PortadaBuscada />
      </div>
      <div className="w-100 d-flex flex-column-reverse mt-5">{MapDataBaseBuscado}</div>
      <div className="mt-5"></div>
    </div>
  );
};
export default Perfil;
