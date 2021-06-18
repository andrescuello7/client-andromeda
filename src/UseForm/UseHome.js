import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import CardPerfil from "../components/Card/CardPerfil";
import CardHome from "../components/Card/CardHome";

const UseHome = () => {
  //UseStates de modal
  const token = localStorage.getItem("token");
  const ColorBack = localStorage.getItem("color");
  const headers = { "x-auth-token": token };
  const [backgroud, setBackgroud] = useState("BackgroundColor1");
  const [navbar, setNavbar] = useState("barraGeneralPhone");
  const [cardOpcion, setCardOpcion] = useState("cardSelect1");
  const [colorBolean, setColorBolean] = useState(true);
  const [settings, setSettings] = useState(true);

  //UseStates de Aplicacion
  const exampleImage =
    "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg";
  const [admin, setAdmin] = useState("");
  const [usuario, setUsuario] = useState([]);
  const [proveedor, setProveedor] = useState("");
  const [cardSelect, setCardSelect] = useState("d-none");
  const [butonSelect, setButtonSelect] = useState(false);
  const [publicaciones, setPublicaciones] = useState([]);
  const [identificador, setIdentificador] = useState("");
  const [identBusqueda, setIdentBusqueda] = useState("");
  const [identProvincia, setIdentProvincia] = useState("");
  const [publicacionActual, setPublicacionActual] = useState(false);
  const [identificadorBusqueda, setIdentificadorBusqueda] = useState("");

  //If de filtros de busqueda
  if (identBusqueda.length !== 0) {
    localStorage.setItem("identBusqueda", identBusqueda);
    window.location.href = "/buscar";
  }

  if (identProvincia.length !== 0) {
    localStorage.setItem("identProvincia", identProvincia);
    window.location.href = "/provincia";
  }

  //useEffects de Use Home
  useEffect(() => {
    Publicacion();
  }, [publicaciones]);

  useEffect(() => {
    Usuario();
  }, []);

  useEffect(() => {
    if (identificador.length !== 0) {
      Delete();
    }
  }, [identificador]);

  useEffect(() => {
    //Vista de fondo
    console.log(ColorBack);
    if (colorBolean === true) {
      setBackgroud("BackgroundColor1");
      setCardOpcion("cardSelect1");
      setNavbar("barraGeneralPhone");
      localStorage.setItem("color", "BackgroundColor1");
    }
    if (colorBolean === false) {
      setBackgroud("BackgroundColor2");
      setCardOpcion("cardSelect2");
      setNavbar("barraGeneralPhone2");
      localStorage.setItem("color", "BackgroundColor2");
    }
  }, [colorBolean]);

  //Selection de cada Card
  const buttonSelectClick = () => {
    if (butonSelect === true) {
      setCardSelect("d-none");
      setButtonSelect(false);
    } else {
      setCardSelect("d-block");
      setButtonSelect(true);
    }
  };

  //Consulta el usuario activo actualmente
  const Usuario = async (e) => {
    try {
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
  const Publicacion = async (e) => {
    try {
      const { data } = await axios.get("publicacion");
      setPublicaciones(data);
    } catch (error) {
      if (error) {
        console.log(error);
      }
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
      <div>
        <CardHome card={date} key={i} />
      </div>
    ));

  //Aqui hacemos el map y compara con el id del producto y es del usuario

  const MapComparatePublic =
    (publicaciones.length === 0 && (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )) ||
    publicaciones.map((date, i) => <CardPerfil card={date} key={i} />);
  return {
    cardOpcion,
    navbar,
    admin,
    usuario,
    proveedor,
    cardSelect,
    backgroud,
    butonSelect,
    MapDataBase,
    colorBolean,
    exampleImage,
    identificador,
    identBusqueda,
    publicaciones,
    identProvincia,
    publicacionActual,
    MapComparatePublic,
    identificadorBusqueda,
    Delete,
    Usuario,
    setAdmin,
    setSettings,
    Publicacion,
    setProveedor,
    setCardSelect,
    setBackgroud,
    setColorBolean,
    setButtonSelect,
    setPublicaciones,
    setIdentificador,
    setIdentBusqueda,
    buttonSelectClick,
    setIdentProvincia,
    setPublicacionActual,
    setIdentificadorBusqueda,
  };
};
export default UseHome;
