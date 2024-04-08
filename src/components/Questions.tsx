const Questions = () => {
  return (
    <div id="about" className="preview">
      <div style={{ display: "none" }}>
        <iframe
          id="fileFrame"
          src="about:blank"
          className="mdb-d-flex mdb-justify-content-center mdb-align-items-center"
        ></iframe>
      </div>
      <div>
        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
          draggable="false"
        >
          <section draggable="false" className="container pt-5">
            <section className="mb-10 text-center">
              {" "}
              <h2 className="fw-bold mb-5 text-center">
                {" "}
                <span
                  className="me-1"
                  data-builder-edit="text"
                  data-builder-name="text1"
                >
                  Why is it so
                </span>
                <u
                  className="text-primary"
                  data-builder-edit="text"
                  data-builder-name="text2"
                >
                  great?
                </u>{" "}
              </h2>{" "}
              <div className="row gx-lg-5">
                {" "}
                <div className="col-md-4 mb-5 mb-md-0">
                  {" "}
                  <div className="p-3 bg-primary rounded-4 shadow-2-strong d-inline-block mb-4">
                    {" "}
                    <i
                      className="fas fa-headset fa-lg text-white fa-fw"
                      data-builder-edit="icon"
                      data-builder-name="icon1"
                      aria-controls="#picker-editor"
                    ></i>{" "}
                  </div>{" "}
                  <h5
                    className="fw-bold mb-3"
                    data-builder-edit="text"
                    data-builder-name="text3"
                  >
                    Support 24/7
                  </h5>{" "}
                  <p
                    className="text-muted mb-0"
                    data-builder-edit="text"
                    data-builder-name="text4"
                  >
                    Laudantium totam quas cumque pariatur at doloremque hic quos
                    quia eius. Reiciendis optio minus mollitia rerum labore
                    facilis inventore voluptatem ad, quae quia sint. Ullam.
                  </p>{" "}
                </div>{" "}
                <div className="col-md-4 mb-5 mb-md-0">
                  {" "}
                  <div className="p-3 bg-primary rounded-4 shadow-2-strong d-inline-block mb-4">
                    {" "}
                    <i
                      className="fas fa-shield-alt fa-lg text-white fa-fw"
                      data-builder-edit="icon"
                      data-builder-name="icon2"
                      aria-controls="#picker-editor"
                    ></i>{" "}
                  </div>{" "}
                  <h5
                    className="fw-bold mb-3"
                    data-builder-edit="text"
                    data-builder-name="text5"
                  >
                    Safe and solid
                  </h5>{" "}
                  <p
                    className="text-muted mb-0"
                    data-builder-edit="text"
                    data-builder-name="text6"
                  >
                    Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                    ullam aspernatur odio soluta, quisquam dolore animi mollitia
                    a omnis praesentium, expedita nobis!
                  </p>{" "}
                </div>{" "}
                <div className="col-md-4 mb-5 mb-md-0">
                  {" "}
                  <div className="p-3 bg-primary rounded-4 shadow-2-strong d-inline-block mb-4">
                    {" "}
                    <i
                      className="fas fa-shipping-fast fa-lg text-white fa-fw"
                      data-builder-edit="icon"
                      data-builder-name="icon3"
                      aria-controls="#picker-editor"
                    ></i>{" "}
                  </div>{" "}
                  <h5
                    className="fw-bold mb-3"
                    data-builder-edit="text"
                    data-builder-name="text7"
                  >
                    Extremely fast
                  </h5>{" "}
                  <p
                    className="text-muted mb-0"
                    data-builder-edit="text"
                    data-builder-name="text8"
                  >
                    Enim cupiditate, minus nulla dolor cumque iure eveniet
                    facere ullam beatae hic voluptatibus dolores exercitationem?
                    Facilis debitis aspernatur amet nisi?
                  </p>
                </div>{" "}
              </div>{" "}
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Questions;
