import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import UsePasword from "../../UseForm/UsePasword";

const Login = () => {
  const [input, setInput] = useState({});
  const [validationSubmit, setValidationSubmit] = useState(false);
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
          <Form
            onSubmit={HandleSubmit}
            className="FormLogin card"
          >
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
            <Button variant="primary" type="submit">
              Iniciar Sesion
            </Button>
          </Form>
          <div className="About">
            <div className="AboutImgen">
              <div className="AboutText">
                <h1 className="AboutTitulo">Welcome to Cypher</h1>
                <h5>About us</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
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
