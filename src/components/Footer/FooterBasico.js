import "./Footer.css";

const FooterBasico = () => {
  return (
    <div>
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
export default FooterBasico;
