import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import CardPerfil from "../components/Card/CardPerfil";
import CardHome from "../components/Card/CardHome";

const UseHome = () => {
  //UseStates de modal
  const token = localStorage.getItem("token");
  const headers = { "x-auth-token": token };
  const [settings, setSettings] = useState(false);

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
  const [identInc, setIdentInc] = useState();
  const [identQuit, setIdentQuit] = useState();
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
  }, [usuario]);

  useEffect(() => {
    if (identificador.length !== 0) {
      Delete();
    }
  }, [identificador]);

  useEffect(() => {
    if (identInc !== undefined) {
      LikeInc();
    }
    if (identQuit !== undefined) {
      LikeQuit();
    }
  }, [identInc, identQuit]);

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

  const LikeInc = async (e) => {
    try {
      const headers = { "x-auth-token": token };
      await axios.put(`publicacion/inclike/${identInc}`, {}, { headers });
      setSettings(true);
    } catch (error) {
      console.log(error);
    }
  };

  const LikeQuit = async (e) => {
    try {
      const headers = { "x-auth-token": token };
      await axios.put(`publicacion/quitlike/${identQuit}`, {}, { headers });
      setSettings(false);
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
    admin,
    usuario,
    settings,
    proveedor,
    cardSelect,
    butonSelect,
    MapDataBase,
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
    LikeInc,
    setAdmin,
    setSettings,
    Publicacion,
    setProveedor,
    setButtonSelect,
    setPublicaciones,
    setIdentificador,
    setIdentBusqueda,
    buttonSelectClick,
    setIdentProvincia,
    setIdentInc,
    setIdentQuit,
    setPublicacionActual,
    setIdentificadorBusqueda,
  };
};
export default UseHome;
