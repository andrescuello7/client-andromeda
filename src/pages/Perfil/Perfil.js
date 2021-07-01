import UseHome from "../../UseForm/UseHome";
import Portada from "../../components/Portada/Portada";

const Perfil = () => {
  const { publicaciones, usuario, MapComparatePublic } = UseHome();
  const fondo = localStorage.getItem("fondo");

  return (
    <div
      className={
        (fondo !== "negro" && "BackgroundColor1") || "BackgroundColor2"
      }
    >
      <div className="w-100 d-flex justify-content-center">
        <div className="w-100 d-flex justify-content-center flex-column">
          <div className="ColorDePerfil animate__animated animate__bounce">
            <Portada />
          </div>
          <div className="ColorDePublic">
            <div className="w-100 d-flex flex-column-reverse mt-5">
              {MapComparatePublic}
            </div>
          </div>
          <div className="headingPerfil"></div>
        </div>
      </div>
    </div>
  );
};
export default Perfil;
