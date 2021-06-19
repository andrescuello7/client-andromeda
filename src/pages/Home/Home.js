import LandPage from "../../components/LandPage/LandPage";
import Barra from "../../components/Barra/Barra";
import UseHome from "../../UseForm/UseHome";

const Home = () => {
  const { usuario } = UseHome();
  return (
    <div className={usuario.fondo !== 'negro' && "BackgroundColor1" || "BackgroundColor2"}>
      <div className="VistaPrincipal">
        <div className="barra sticky-top">
          <Barra />
        </div>
        <div className="muro">
          <LandPage />
        </div>
        <div className="anuncios"></div>
      </div>
    </div>
  );
};
export default Home;
