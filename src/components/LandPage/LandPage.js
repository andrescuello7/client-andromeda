import UseHome from "../../UseForm/UseHome";
import UseProvincia from "../../UseForm/UseProvincia";
import Publicacion from "../Publicacion/Publicacion";
import { useState } from "react";

const LandPage = () => {
  //Declaracion de datos traidos de Hook Home y Token de LocalStorage
  const { MapDataBaseBuscado } = UseProvincia();
  const { MapDataBase, usuario } = UseHome();
  const token = localStorage.getItem("token");

  return (
    <div className="body">
      <div>
        {token && (
          <div className="w-100 d-flex justify-content-center">
            <Publicacion />
          </div>
        )}
        {!token && <div className="mt-5"></div>}
        <div className="w-100 d-flex flex-column-reverse">{MapDataBase}</div>
      </div>
      <div className="mt-5"></div>
    </div>
  );
};
export default LandPage;
