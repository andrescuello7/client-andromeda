import LandPage from "../../components/LandPage/LandPage";
import Barra from "../../components/Barra/Barra";
import UseHome from "../../UseForm/UseHome";

const Home = () => {
  const ColorBack = localStorage.getItem("color");
  const { colorBolean, setColorBolean, backgroud, setBackgroud } = UseHome();
  return (
    <div className={ColorBack}>
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
