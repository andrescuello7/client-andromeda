import UseProvincia from "../../UseForm/UseProvincia";
import Barra from "../../components/Barra/Barra";

const ProvinciaBuscada = () => {
  const { MapDataBaseBuscado } = UseProvincia();

  return (
    <div className="bodyLandPage">
      <div className="barra sticky-top">
        <Barra />
      </div>
      <div className="ColorDePerfil perfil">
        <div className="w-100 d-flex flex-column-reverse">
          {MapDataBaseBuscado}
        </div>
        <div className="mt-5"></div>
      </div>
      <div className="perfilAnuncios"></div>
    </div>
  );
};
export default ProvinciaBuscada;
