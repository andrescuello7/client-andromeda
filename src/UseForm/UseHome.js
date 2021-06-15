import { useState, useEffect } from "react";
import axios from "axios";
import { Card, NavDropdown, Spinner, Modal, Button } from "react-bootstrap";
import UsePostPublic from "../UseForm/UsePostPublic";
import imagenPredeterminada from "../flyer.jpeg";

const UseHome = () => {
  //UseStates de modal
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [publicacionActual, setPublicacionActual] = useState(false);

  //UseStates de Aplicacion
  const [admin, setAdmin] = useState("");
  const [usuario, setUsuario] = useState([]);
  const [proveedor, setProveedor] = useState("");
  const [publicaciones, setPublicaciones] = useState([]);
  const [identificador, setIdentificador] = useState("");
  const [identBusqueda, setIdentBusqueda] = useState("");
  const [identificadorBusqueda, setIdentificadorBusqueda] = useState("");
  const exampleImage =
    "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg";
  const [butonSelect, setButtonSelect] = useState(false);
  const [cardSelect, setCardSelect] = useState("d-none");

  const buttonSelectClick = () => {
    if (butonSelect === true) {
      setCardSelect("d-none");
      setButtonSelect(false);
    } else {
      setCardSelect("d-block");
      setButtonSelect(true);
    }
  };
  useEffect(() => {
    console.log(identificadorBusqueda);
  }, [publicaciones]);

  useEffect(() => {
    Publicacion();
  }, [identificadorBusqueda]);

  useEffect(() => {
    Usuario();
  }, [usuario]);

  useEffect(() => {
    if (identificador.length !== 0) {
      Delete();
    }
  }, [identificador]);

  if (identBusqueda.length !== 0) {
    localStorage.setItem("identBusqueda", identBusqueda);
    window.location.href = "/buscar";
  }
  //Consulta el usuario activo actualmente
  const Usuario = async () => {
    try {
      const headers = { "x-auth-token": token };
      const { data } = await axios.get("auth", {
        headers,
      });
      setUsuario(data.usuario);
      setAdmin(data.usuario.estado);
      setProveedor(data.usuario.usuario);
    } catch (error) {
      console.log(error);
    }
  };
  //Consulta de Publicaiones
  const Publicacion = async () => {
    try {
      const { data } = await axios.get("publicacion");
      setPublicaciones(data);
    } catch (error) {
      console.log(error);
    }
  };
  //Funcion de Eliminar Publicacion
  const Delete = async () => {
    try {
      const headers = { "x-auth-token": token };
      await axios.delete(`publicacion/${identificador}`, { headers });
    } catch (error) {
      console.log("Error en eliminar datos");
    }
  };

  //Aqui se hacemos el map de todos las publicaciones
  const MapDataBase =
    (publicaciones.length === 0 && (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )) ||
    publicaciones.map((date, i) => (
      <div className="CardDiv" key={i}>
        <Card className="CardPublica">
          <div className="CardPublicacion">
            <div
              className="datosTitular"
              onClick={() => setIdentBusqueda(date.creador)}
            >
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

            <a onClick={buttonSelectClick} className="buttonSelect">
              <div onClick={() => setIdentificadorBusqueda(date._id)}>
                <b>...</b>
              </div>
            </a>
          </div>
          {identificadorBusqueda === date._id && (
            <div className="SelectCard">
              <div className={cardSelect}>
                <div className="cardSelect">
                  {(date.creador === usuario._id && (
                    <div className="option text-danger">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                      <b
                        className="ml-2"
                        onClick={() => setIdentificador(date._id)}
                      >
                        Eliminar
                      </b>
                    </div>
                  )) ||
                    (admin === "admin" && (
                      <div className="option text-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                        <b
                          className="ml-2"
                          onClick={() => setIdentificador(date._id)}
                        >
                          Eliminar
                        </b>
                      </div>
                    ))}
                  <div
                    className="option"
                    onClick={() => setIdentBusqueda(date.creador)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    <b className="ml-2">Ver Perfil</b>
                  </div>
                  <div className="option">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-card-image"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                    </svg>
                    <b className="ml-2">Ver foto</b>
                  </div>
                  <div className="option">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-brush"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                    </svg>
                    <b className="ml-2">Editar publicacion</b>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="mt-2 d-flex flex-column">
            <div className="descripcionTitulo">{date.titulo}</div>
            <div className="descripcionPublicacion">{date.contenido}</div>
            {date.flyer && (
              <div className="d-flex justify-content-center">
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

  //Aqui hacemos el map y compara con el id del producto y es del usuario

  const MapComparatePublic =
    (publicaciones.length === 0 && (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )) ||
    publicaciones.map((date, i) => (
      <div>
        {date.creador === usuario._id && (
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
                <a onClick={buttonSelectClick} className="buttonSelect">
                  <div onClick={() => setIdentificadorBusqueda(date._id)}>
                    <b>...</b>
                  </div>
                </a>
                {identificadorBusqueda === date._id && (
                  <div className="SelectCard">
                    <div className={cardSelect}>
                      <div className="cardSelect">
                        {(date.creador === usuario._id && (
                          <div className="option text-danger">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path
                                fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              />
                            </svg>
                            <b
                              className="ml-2"
                              onClick={() => setIdentificador(date._id)}
                            >
                              Eliminar
                            </b>
                          </div>
                        )) ||
                          (admin === "admin" && (
                            <div className="option text-danger">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                />
                              </svg>
                              <b
                                className="ml-2"
                                onClick={() => setIdentificador(date._id)}
                              >
                                Eliminar
                              </b>
                            </div>
                          ))}
                        <div
                          className="option"
                          onClick={() => setIdentBusqueda(date.creador)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-person"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                          </svg>
                          <b className="ml-2">Ver Perfil</b>
                        </div>
                        <div className="option">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-card-image"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                          </svg>
                          <b className="ml-2">Ver foto</b>
                        </div>
                        <div className="option">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-brush"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                          </svg>
                          <b className="ml-2">Editar publicacion</b>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-2 d-flex flex-column">
                <div className="descripcionTitulo">{date.titulo}</div>
                <div className="descripcionPublicacion">{date.contenido}</div>
                {date.flyer && (
                  <div className="d-flex justify-content-center">
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
    setPublicacionActual,
    MapComparatePublic,
    publicacionActual,
    publicaciones,
    identBusqueda,
    Publicacion,
    MapDataBase,
    proveedor,
    usuario,
  };
};
export default UseHome;
