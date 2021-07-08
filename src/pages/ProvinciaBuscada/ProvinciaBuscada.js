import UseProvincia from "../../UseForm/UseProvincia";
import Barra from "../../components/Barra/Barra";
import UseHome from "../../UseForm/UseHome";

const ProvinciaBuscada = () => {
  const { MapDataBaseBuscado } = UseProvincia();
  const { usuario } = UseHome();

  return (
    <div className={usuario.fondo !== 'negro' && "BackgroundColor1" || "BackgroundColor2"}>
      <div className="VistaPrincipal">
        <div className="barra">
          <Barra />
        </div>
        <div className="muro2">
          <div className="d-flex flex-column-reverse">
            {MapDataBaseBuscado}
          </div>
        </div>
        <div className="perfilAnuncios"></div>
      </div>
    </div>
  );
};
export default ProvinciaBuscada;
