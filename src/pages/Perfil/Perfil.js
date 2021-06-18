import UseHome from "../../UseForm/UseHome";
import Portada from "../../components/Portada/Portada";

const Perfil = () => {
  const ColorBack = localStorage.getItem("color");
  const { colorBolean, setColorBolean, backgroud, setBackgroud } = UseHome();
  const { MapComparatePublic } = UseHome();

  return (
    <div className={ColorBack}>
      <div className="w-100 d-flex justify-content-center">
        <div className="ColorDePerfil">
          <div>
            <Portada />
          </div>
          <div className="w-100 d-flex flex-column-reverse mt-5">
            {MapComparatePublic}
          </div>
          <div className="mt-5"></div>
        </div>
      </div>
    </div>
  );
};
export default Perfil;
