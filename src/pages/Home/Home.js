import LandPage from "../../components/LandPage/LandPage";
import Barra from "../../components/Barra/Barra";

const Home = () => {
  return (
    <div className="bodyLandPage">
      <div className="barra sticky-top">
        <Barra />
      </div>
      <div className="muro">
        <LandPage />
      </div>
      <div className="anuncios">
      </div>
    </div>
  );
};
export default Home;
