import { useState } from "react";

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
