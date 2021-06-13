import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Register = () => {
  const [input, setInput] = useState({});
  const [validation, setValidation] = useState(false);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("usuario", input);
      localStorage.setItem("token", data);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setValidation(true);
    }
  };

  return (
    <div className="FondoDeForm">
      <div className="login">
        <Form onSubmit={HandleSubmit} className="FormLogin card">
          <div className="w-100">
            <h1 className="text-center PortadaTituloForm">
              <b>
                <i>Registrate</i>
              </b>
            </h1>
          </div>
          <hr className="bg-light"/>
          <Form.Group controlId="formBasicEmail">
            <div className="d-flex">
              <div className="text-dark mt-2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                  </svg>
              </div>
              <input 
                className="form-control"
                onChange={(e) => HandleChange(e)}
                type="text"
                name="usuario"
                placeholder="Usuario"/>
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <div className="d-flex">
              <div className="text-dark mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
              </svg>
              </div>
              <input 
                className="form-control"
                onChange={(e) => HandleChange(e)}
                type="email"
                name="email"
                placeholder="Email"/>
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <div className="d-flex">
              <div className="text-dark mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
              </svg>
              </div>
              <input 
                className="form-control"
                onChange={(e) => HandleChange(e)}
                type="password"
                name="password"
                placeholder="Password"/>
            </div>
          </Form.Group>
          {validation === true && (
            <div className="ml-2 text-danger">
              <p>No se puede registrar, modifica los datos!</p>
            </div>
          )}
          <div>
            <a href="/login">Ya me registre, iniciar sesion</a>
          </div>
          <Button variant="primary" type="submit">
            Registarse
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Register;
