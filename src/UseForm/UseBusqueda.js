import { useState, useEffect } from "react";
import axios from "axios";
import UseHome from "../UseForm/UseHome";
import { Card, Spinner } from "react-bootstrap";

const UseBusqueda = () => {
  //UseStates de Aplicacion
  const { setIdentInc, setIdentQuit, settings, usuario, card, HandleChange, setIdentComentario, comentarios } = UseHome();
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
                <div className="descripcionPublicacion">{date.contenido}</div>
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
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="bi bi-suit-spade" 
                  viewBox="0 0 16 16"
                  onClick={() => setIdentInc(date._id)}>
                  <path d="M8 0a.5.5 0 0 1 .429.243c1.359 2.265 2.925 3.682 4.25 4.882.096.086.19.17.282.255C14.308 6.604 15.5 7.747 15.5 9.5a4 4 0 0 1-5.406 3.746c.235.39.491.782.722 1.131.434.659-.01 1.623-.856 1.623H6.04c-.845 0-1.29-.964-.856-1.623.263-.397.51-.777.728-1.134A4 4 0 0 1 .5 9.5c0-1.753 1.192-2.896 2.539-4.12l.281-.255c1.326-1.2 2.892-2.617 4.251-4.882A.5.5 0 0 1 8 0zM3.711 6.12C2.308 7.396 1.5 8.253 1.5 9.5a3 3 0 0 0 5.275 1.956.5.5 0 0 1 .868.43c-.094.438-.33.932-.611 1.428a29.247 29.247 0 0 1-1.013 1.614.03.03 0 0 0-.005.018.074.074 0 0 0 .024.054h3.924a.074.074 0 0 0 .024-.054.03.03 0 0 0-.005-.018c-.3-.455-.658-1.005-.96-1.535-.294-.514-.57-1.064-.664-1.507a.5.5 0 0 1 .868-.43A3 3 0 0 0 14.5 9.5c0-1.247-.808-2.104-2.211-3.38L12 5.86c-1.196-1.084-2.668-2.416-4-4.424-1.332 2.008-2.804 3.34-4 4.422l-.289.261z"/>
                </svg>
              </div>
              )) || (
              <div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="bi bi-suit-spade-fill" 
                  viewBox="0 0 16 16"
                  onClick={() => setIdentQuit(date._id)}>
                  <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z"/>
                </svg>
              </div>
            )}
            <div>
              <p>{date.likes}</p>
            </div>
          </div><div>
                <hr className="bg-dark" />
              </div>
              {date.comentarios && (<div>
                {date.comentarios.map((date, i) =>
                <div className="d-flex ml-2 mb-2" key={i}>
                  <img className="NavbarFoto" src={date.usuario || exampleImage} alt="" />
                <div>{date.contenido}</div>
              </div>)}
              </div>)}
              {usuario.imagen &&(<div className="d-flex ml-2 mb-2 mr-2">
                <img className="NavbarFoto" src={usuario.imagen || exampleImage} alt="" />
              <input 
                className={(usuario.fondo !== "negro" && "input") || "input2"}
                onChange={HandleChange}
                type="text"
                name="contenido"/>
              <button className={(usuario.fondo !== "negro" && "btn btn-outline-dark") || "btn btn-outline-light"} onClick={() => setIdentComentario(date._id)} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cursor-fill"
                  viewBox="0 0 16 16"
                >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                </svg>
              </button>
            </div>)}
        </Card>
      </div>
    ));
  return {
    MapDataBaseBuscado,
    usuarioBusqueda,
  };
};
export default UseBusqueda;
