import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Spinner } from "react-bootstrap";

const UseBusqueda = () => {
  //UseStates de Aplicacion
  const [usuarioBusqueda, setUsuarioBusqueda] = useState([]);
  const [publicacionesBusqueda, setPublicacionesBusqueda] = useState([]);
  const identBusqueda = localStorage.getItem("identBusqueda");
  const exampleImage =
    "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg";

  useEffect(() => {
    if (usuarioBusqueda.length !== undefined) {
      UsuarioBusqueda();
    }
    PublicacionBusqueda();
  }, []);

  //Consulta el usuario activo actualmente
  const UsuarioBusqueda = async () => {
    try {
      const { data } = await axios.get(`publicacion/${identBusqueda}`);
      setUsuarioBusqueda(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  //Consulta de Publicaiones

  const PublicacionBusqueda = async () => {
    try {
      const { data } = await axios.get(`publicacion/usuario/${identBusqueda}`);
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
    ));
  return {
    MapDataBaseBuscado,
    usuarioBusqueda,
  };
};
export default UseBusqueda;
