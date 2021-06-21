import { useState, useEffect } from "react";
import axios from "axios";
import UseHome from "../UseForm/UseHome";
import { Card, Spinner } from "react-bootstrap";

const UseBusqueda = () => {
  //UseStates de Aplicacion
  const [publicacionesBusqueda, setPublicacionesBusqueda] = useState([]);
  const { setIdentInc, setIdentQuit, settings } = UseHome();
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
          <div className="CardDiv mt-0" key={i}>
            <Card className="CardPublica">
              <div className="CardPublicacion">
                <div className="datosTitular">
                  <div className="PublicacionFotoMuro">
                    <img
                      className="PublicacionFoto"
                      src={date.perfil || exampleImage}
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-column text-left">
                    <div>
                      <b>{date.proveedor}</b>
                    </div>
                    <div className="descripcionPublicacion">
                      {date.contenido}
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
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
              <div className="ml-5 d-flex">
                {(settings === false && (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cursor"
                      viewBox="0 0 16 16"
                      onClick={() => setIdentInc(date._id)}
                    >
                      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                    </svg>
                  </div>
                )) || (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cursor-fill"
                      viewBox="0 0 16 16"
                      onClick={() => setIdentQuit(date._id)}
                    >
                      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                    </svg>
                  </div>
                )}
                <div>
                  <p>{date.likes}</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    ));
  return {
    MapDataBaseBuscado,
  };
};
export default UseBusqueda;
