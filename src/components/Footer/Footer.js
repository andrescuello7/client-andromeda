import "./Footer.css";

//Hook FormConsults
import FormConsults from "../../UseForm/FormConsults";

const Footer = () => {
  //Declaration of states
  const { setDataInputConsults, dataInputConsults, ConsultsOfUser } =
  FormConsults();

  //Change the text in form
  const HandleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...dataInputConsults, [name]: value };
    setDataInputConsults(changedInput);
  };
  return (
    <div>
      <div>
        <div>
          <footer>
            <div className="main-content">
              <div className="left box">
              <h2>Address</h2>
                <div className="mt-2">
                  <div className="place">
                    <span className="fas fa-map-marker-alt button-map"></span>
                    <span className="text">Birendranger, Surknet</span>
                  </div>
                  <div className="phone">
                    <span className="fas fa-phone-alt button-map"></span>
                    <span className="text">+54(381)5615474</span>
                  </div>
                  <div className="email">
                    <span className="fas fa-envelope button-map"></span>
                    <span className="text">Birendranger, Surknet</span>
                  </div>
                </div>
               
              </div>

              <div className="center box">
                <div className="content mt-5">
                  <div className="social text-center">
                  <h1>Logo</h1>
                    <a href="#">
                      <span className="fab fa-facebook-f button-map"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-twitter button-map"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-instagram button-map"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-youtube button-map"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="right box">
                <h2>Contact Us</h2>
                <div className="content">
                  <form>
                    <div className="email">
                      <div className="text">Email</div>
                      <input
                        type="email"
                        name="email"
                        required
                        onChange={HandleChange}
                      />

                      <div className="msg">
                        <div className="text">Message</div>
                        <textarea
                          name="description"
                          id=""
                          cols="22"
                          rows="2"
                          required
                          onChange={HandleChange}
                        ></textarea>
                      </div>
                      <div className="btn w-100">
                        <button onClick={ConsultsOfUser}>Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div>
        <div className="footer">
          <div className="footerInterno">
            <p className="text-center mt-2">
              &copy;{new Date().getFullYear()} Todos los derechos reservados |{" "}
              <b className="text-primary">All right reserved</b> | Terms Of
              Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
