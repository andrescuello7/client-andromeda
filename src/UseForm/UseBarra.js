import { useState, useEffect } from "react";
import axios from "axios";
import { Card, NavDropdown, Spinner, Modal, Button } from "react-bootstrap";
import UseHome from "./UseHome";
import imagenPredeterminada from "../flyer.jpeg";

const UseBusqueda = () => {
  //UseStates de Aplicacion
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
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const handlePerfil = () => {
    window.location.href = "/perfil";
  };
  const handleLogin = () => {
    window.location.href = "/login";
  };
  const handleRegister = () => {
    window.location.href = "/register";
  };
  return {
    buttonSelectClick,
    handleRegister,
    handleLogin,
    handleLogOut,
    handlePerfil,
    butonSelect,
    cardSelect
  };
};
export default UseBusqueda;
