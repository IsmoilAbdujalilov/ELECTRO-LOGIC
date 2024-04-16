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
                  Почему вам стоит работать с
                </span>
                <u
                  className="text-primary"
                  data-builder-edit="text"
                  data-builder-name="text2"
                >
                  нами?
                </u>{" "}
              </h2>{" "}
              <div className="row gx-lg-5">
                {" "}
                <div className="col-md-4 mb-5 mb-md-0">
                  {" "}
                  <div className="p-3 bg-primary rounded-4 shadow-2-strong d-inline-block mb-4">
                    {" "}
                    <i className="fas fa-handshake-angle text-white"></i>
                  </div>{" "}
                  <h5
                    className="fw-bold mb-3"
                    data-builder-edit="text"
                    data-builder-name="text3"
                  >
                    Гарантия лучшей цены
                  </h5>{" "}
                  <p
                    className="text-muted mb-0"
                    data-builder-edit="text"
                    data-builder-name="text4"
                  >
                    Самые профессиональные специалисты, проверенная временем
                    продукция, качественные услуги
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
                    data-builder-name="text5"
                  >
                    Отгрузка за 2 дня
                  </h5>{" "}
                  <p
                    className="text-muted mb-0"
                    data-builder-edit="text"
                    data-builder-name="text6"
                  >
                    Доставка качественной продукции на максимальной скорости и в
                    короткие сроки.
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
                    data-builder-name="text7"
                  >
                    Безопасная доставка
                  </h5>{" "}
                  <p
                    className="text-muted mb-0"
                    data-builder-edit="text"
                    data-builder-name="text8"
                  >
                    Все этапы доставки продукции сопровождаются экспертами.
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
