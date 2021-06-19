import { Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import UsePasword from "../../UseForm/UsePasword";

const Register = () => {
  const [input, setInput] = useState({});
  const [validation, setValidation] = useState(false);
  const [PasswordInputType, ToogleIcon] = UsePasword();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value, fondo: "blanco" };
    setInput(changedInput);
  };
  console.log(input);
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
        <Form onSubmit={HandleSubmit} className="FormRegister card">
          <div className="w-100">
            <h1 className="text-center PortadaTituloForm">
              <b>
                <i>Registrate</i>
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
                  class="bi bi-person-square"
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
                  type="text"
                  name="usuario"
                  placeholder="Usuario"
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <div className="d-flex">
              <div className="text-dark mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
              </div>
              <div>
                <input
                  className="form-control"
                  onChange={(e) => HandleChange(e)}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <div className="d-flex">
              <div className="text-dark mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-lock-fill"
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
                <span className="password-toogle-icon-register">
                  {ToogleIcon}
                </span>
              </div>
            </div>
          </Form.Group>
          <Form.Group
            name="provincia"
            onChange={(e) => HandleChange(e)}
            controlId="formGridState"
            className="select-style"
          >
            <Form.Control name="provincia" as="select" defaultValue="Provincia">
              <option>Provincia</option>
              <option>Buenos Aires</option>
              <option>Catamarca</option>
              <option>Chaco</option>
              <option>Cordoba</option>
              <option>Chubut</option>
              <option>Corrientes</option>
              <option>Entre Rios</option>
              <option>Formosa</option>
              <option>Jujuy</option>
              <option>La Pampa</option>
              <option>La Rioja</option>
              <option>Mendoza</option>
              <option>Misiones</option>
              <option>Neuquen</option>
              <option>Rio Negro</option>
              <option>Salta</option>
              <option>San Juan</option>
              <option>San Luis</option>
              <option>Santa Cruz</option>
              <option>Santa Fe</option>
              <option>Santiago del Estero</option>
              <option>Tierra del Fuego</option>
              <option>Tucuman</option>
            </Form.Control>
          </Form.Group>
          {validation === true && (
            <div className="ml-2 text-danger">
              <p>No se puede registrar, modifica los datos!</p>
            </div>
          )}
          <div>
            <a href="/login">Ya me registre, iniciar sesion</a>
          </div>
          <Button variant="primary" className="w-100" type="submit">
            Registarse
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
                  class="mr-2 bi bi-signpost-2 text-light"
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
                resuelvan el problema de busqueda de opotunidades para mejorar y
                perticipal a nivel Regional como niven Nacional, desde ya espero
                que sea vista a esta web como una comunidad de gente que busca
                expandir los valores del Hip-Hop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
