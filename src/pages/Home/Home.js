import LandPage from "../../components/LandPage/LandPage";
import Barra from "../../components/Barra/Barra";
import UseHome from "../../UseForm/UseHome";

const Home = () => {
  const { usuario } = UseHome();
  return (
    <div className={usuario.fondo !== 'negro' && "BackgroundColor1" || "BackgroundColor2"}>
      <div className="VistaPrincipal">
        <div className="barra">
          <Barra />
        </div>
        <div className="muro2">
          <LandPage />
        </div>
        <div className="anuncios"></div>
      </div>
    </div>
  );
};
export default Home;

//animation option no funcion for moment:  sticky-top animate__animated animate__bounce