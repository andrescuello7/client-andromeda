import UseHome from "../../UseForm/UseHome";
import Portada from "../../components/Portada/Portada";

const Perfil = () => {
  const { usuario } = UseHome();
  const { MapComparatePublic } = UseHome();

  return (
    <div
      className={
        (usuario.fondo !== 'negro' && "BackgroundColor1" || "BackgroundColor2")
      }
    >
      <div className="w-100 d-flex justify-content-center">
        <div className="w-100 d-flex justify-content-center flex-column">
          <div className="ColorDePerfil">
            <Portada />
          </div>
          <div className="ColorDePublic">
            <div className="w-100 d-flex flex-column-reverse mt-5">
              {MapComparatePublic}
            </div>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Perfil;
