import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Spinner } from "react-bootstrap";

const UseBusqueda = () => {
  //UseStates de Aplicacion
  const [publicacionesBusqueda, setPublicacionesBusqueda] = useState([]);
  const identProvincia = localStorage.getItem("identProvincia");
  const exampleImage =
    "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg";

  useEffect(() => {
    PublicacionBusqueda();
  }, []);

  //Consulta de Publicaciones

  const PublicacionBusqueda = async () => {
    try {
      const { data } = await axios.get(`publicacion`);
      setPublicacionesBusqueda(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Aqui se hacemos el map de todas las publicaciones del Usuario buscado

  const MapDataBaseBuscado =
    (publicacionesBusqueda.length === 0 && (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )) ||
    publicacionesBusqueda.map((date, i) => (
      <div>
        {date.provincia === identProvincia && (
          <div className="CardDiv" key={i}>
            <Card className="CardPublica">
              <div className="CardPublicacion">
                <div className="datosTitular">
                  <div>
                    <img
                      className="PublicacionFoto"
                      src={date.perfil || exampleImage}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>{date.proveedor}</b>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="descripcionPublicacion">{date.contenido}</div>
                {date.flyer && (
                  <div className="mt-2 d-flex justify-content-center">
                    <img
                      className="PublicacionFotoPublicada"
                      src={date.flyer}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}
      </div>
    ));
  return {
    MapDataBaseBuscado
  };
};
export default UseBusqueda;
