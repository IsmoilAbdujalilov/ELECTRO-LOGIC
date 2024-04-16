import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted py-2"
    >
      <div className="container">
        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div>
        </section> */}

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="6" xl="4" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  ELECTRO LOGIC
                </h6>
                <p>
                  Работаем с промышленными предприятиями, учреждениями в сфере
                  здравоохранения и сельского хозяйства, электро­монтажными и
                  строительными организациями
                </p>
              </MDBCol>

              {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </MDBCol> */}

              {/* <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol> */}

              <MDBCol md="4" lg="3" xl="4" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Контакт</h6>
                <p>
                  <a
                    target="_blank"
                    style={{ color: "gray" }}
                    href="https://www.google.com/maps/@40.9077976,68.6830134,21z?entry=ttu"
                  >
                    <MDBIcon color="secondary" icon="home" className="me-2" />
                    Сырдарья, Сырдарьинский район, Камолот МФУ, улица Солнца 51
                    - дом
                  </a>
                </p>
                <p>
                  <a
                    style={{ color: "gray" }}
                    href="mailto:jshukurov811@gmail.com"
                  >
                    <MDBIcon
                      icon="envelope"
                      className="me-3"
                      color="secondary"
                    />
                    jshukurov811@gmail.com
                  </a>
                </p>
                <p>
                  <a style={{ color: "gray" }} href="tel:+998983003392">
                    <MDBIcon color="secondary" icon="phone" className="me-3" />{" "}
                    + 98 300-33-92
                  </a>
                </p>
                <p>
                  <a style={{ color: "gray" }} href="tel:+998997003392">
                    <MDBIcon color="secondary" icon="print" className="me-3" />{" "}
                    + 99 700-33-92
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2020 Copyright:
        <a
          target="_blank"
          className="text-reset fw-bold"
          href="https://electro-logic.uz"
        >
          electro-logic.uz
        </a>
      </div>
    </MDBFooter>
  );
}
