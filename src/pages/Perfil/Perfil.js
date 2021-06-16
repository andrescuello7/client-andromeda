import UseHome from "../../UseForm/UseHome";
import Portada from "../../components/Portada/Portada";
import Barra from "../../components/Barra/Barra";

const Perfil = () => {
  const { MapComparatePublic } = UseHome();

  return (
    <div>
      <div className="bodyLandPage">
        <div className="barra sticky-top">
          <Barra />
        </div>
        <div className="ColorDePerfil perfil">
          <div>
            <Portada />
          </div>
          <div className="w-100 d-flex flex-column-reverse mt-5">
            {MapComparatePublic}
          </div>
          <div className="mt-5"></div>
        </div>
        <div className="perfilAnuncios"></div>
      </div>
    </div>
  );
};
export default Perfil;
