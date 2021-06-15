import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import CardPerfil from "../components/Card/CardPerfil";
import CardHome from "../components/Card/CardHome";

const UseHome = () => {
  //UseStates de modal
  const token = localStorage.getItem("token");

  //UseStates de Aplicacion
  const [admin, setAdmin] = useState("");
  const [usuario, setUsuario] = useState([]);
  const [proveedor, setProveedor] = useState("");
  const [publicaciones, setPublicaciones] = useState([]);
  const [identificador, setIdentificador] = useState("");
  const [identBusqueda, setIdentBusqueda] = useState("");
  const [identificadorBusqueda, setIdentificadorBusqueda] = useState("");
  const [butonSelect, setButtonSelect] = useState(false);
  const [cardSelect, setCardSelect] = useState("d-none");
  const [publicacionActual, setPublicacionActual] = useState(false);
  const [search, setSearch] = useState();
  const exampleImage =
    "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg";

  //If de filtros de busqueda
  if (identBusqueda.length !== 0) {
    localStorage.setItem("identBusqueda", identBusqueda);
    window.location.href = "/buscar";
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
      //window.location.href = "/";
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
    setAdmin,
    usuario,
    setUsuario,
    proveedor,
    setProveedor,
    publicaciones,
    setPublicaciones,
    identificador,
    setIdentificador,
    identBusqueda,
    setIdentBusqueda,
    identificadorBusqueda,
    setIdentificadorBusqueda,
    butonSelect,
    setButtonSelect,
    cardSelect,
    setCardSelect,
    exampleImage,
    setSearch,
    Delete,
    Usuario,
    setPublicacionActual,
    MapComparatePublic,
    publicacionActual,
    Publicacion,
    MapDataBase,
    buttonSelectClick,
  };
};
export default UseHome;
