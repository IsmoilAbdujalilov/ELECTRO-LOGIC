const HeroDown = () => {
  return (
    <section draggable="false" className="overflow-hidden pt-0">
      <section className="mb-10">
        {" "}
        <div className="py-5 text-center bg-light">
          {" "}
          <div className="container pb-md-5">
            {" "}
            <div className="row d-flex justify-content-center">
              {" "}
              <div className="col-lg-10">
                {" "}
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  {" "}
                  <span data-builder-edit="text" data-builder-name="text1">
                    The best offer on the market
                  </span>{" "}
                  <br />{" "}
                  <span
                    className="text-primary"
                    data-builder-edit="text"
                    data-builder-name="text2"
                  >
                    for your business
                  </span>{" "}
                </h1>{" "}
                <button
                  className="btn   btn-primary btn-lg py-3 px-5 mb-5 mb-md-0 me-md-2"
                  data-builder-edit="button"
                  data-builder-name="button1"
                  aria-controls="#picker-editor"
                >
                  Welcome To Site
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </section>
  );
};

export default HeroDown;
