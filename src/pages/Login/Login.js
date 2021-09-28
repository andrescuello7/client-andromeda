import "./Login.css";
import { Form, Button } from "react-bootstrap";
import UsePasword from "../../UseForm/UsePasword";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({});
  const [validation, setValidation] = useState(false);
  const [PasswordInputType, ToogleIcon] = UsePasword();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("auth", input);
      localStorage.setItem("token", data);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setValidation(true);
    }
  };

  return (
    <div>
      <div className="FondoDeForm">
        <div className="login">
          <Form onSubmit={HandleSubmit} className="FormLogin card">
            <div className="w-100">
              <h1 className="text-center PortadaTituloForm">
                <b>
                  <i>Urban City</i>
                </b>
              </h1>
            </div>
            <hr className="bg-light" />
            <Form.Group controlId="formBasicEmail">
              <div className="d-flex">
                <div className="text-dark mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-person-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                  </svg>
                </div>
                <div>
                  <input
                    className="form-control"
                    onChange={(e) => HandleChange(e)}
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                </div>
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <div className="d-flex">
                <div className="text-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-lock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <div>
                  <input
                    className="form-control"
                    onChange={(e) => HandleChange(e)}
                    type={PasswordInputType}
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <span className="password-toogle-icon">{ToogleIcon}</span>
                </div>
              </div>
            </Form.Group>
            {validation === true && (
              <div className="ml-2 text-danger">
                <p>No se puede iniciar sesion, modifica los datos!</p>
              </div>
            )}
            <div>
              <b>
                <a href="/register">No tienes cuenta?, create una cuenta</a>
              </b>
            </div>
            <Button variant="primary" className="w-100" type="submit">
              Iniciar Sesion
            </Button>
          </Form>
          <div className="About">
            <div className="AboutImgen">
              <div className="AboutText">
                <h1 className="AboutTitulo text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="mr-2 bi bi-signpost-2 text-light"
                    viewBox="0 0 16 16"
                    >
                    <path d="M7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586a1 1 0 0 0-2 0zM13.5 3l.75 1-.75 1H2V3h11.5zm.5 5v2H2.5l-.75-1 .75-1H14z" />
                  </svg>
                    Urban City
                </h1>
                <h5>Sobre nosotros</h5>
                <p>
                  Esta es una web hecha con la finalidad de que las competencias
                  puedan tener alcance a todos los competidores que buscan subir
                  su nivel competitivo a traves de ellas, como los competidores
                  resuelvan el problema de busqueda de opotunidades para mejorar
                  y perticipal a nivel Regional como niven Nacional, desde ya
                  espero que sea vista a esta web como una comunidad de gente
                  que busca expandir los valores del Hip-Hop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
