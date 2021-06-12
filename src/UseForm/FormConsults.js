//Components Of React
import axios from "axios";
import { useState } from "react";

const FormConsults = () => {
  //States
  const [dataInputConsults, setDataInputConsults] = useState({});

  //Funcion of method Post of consults
  const ConsultsOfUser = async () => {
    try {
      await axios.post("http://localhost:5000/api/consult", dataInputConsults);
      console.log('consulta enviada');
    } catch (error) {
      console.log(error);
    }
  };
  console.log(dataInputConsults)
  return {
    setDataInputConsults,
    dataInputConsults,
    ConsultsOfUser,
  };
};

export default FormConsults;
