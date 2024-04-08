const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div>
          <div
            data-draggable="true"
            style={{ position: "relative" }}
            draggable="false"
          >
            <section draggable="false" className="container pt-5">
              <section className="mb-10">
                {" "}
                <h2 className="fw-bold mb-5 text-center">Contact us</h2>{" "}
                <div className="row gx-lg-5">
                  {" "}
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    {" "}
                    <form>
                      <label htmlFor="name">Name input </label>
                      <div className="form-outline mb-4">
                        {" "}
                        <input
                          id="name"
                          type="text"
                          placeholder="Name"
                          className="form-control"
                        />{" "}
                        <div className="form-notch">
                          <div className="form-notch-leading"></div>
                          <div className="form-notch-middle"></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>{" "}
                      <label htmlFor="email">Email input</label>
                      <div className="form-outline mb-4">
                        <input
                          id="email"
                          type="email"
                          placeholder="Email"
                          className="form-control"
                        />
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: "9px" }}
                          ></div>
                          <div className="form-notch-middle"></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                      <label htmlFor="message">Message input</label>
                      <div className="form-outline mb-4">
                        <textarea
                          rows={4}
                          id="message"
                          placeholder="Message"
                          className="form-control"
                        ></textarea>
                        <div className="form-notch">
                          <div className="form-notch-leading"></div>
                          <div className="form-notch-middle"></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>{" "}
                      <div className="form-check d-flex justify-content-start mb-4">
                        {" "}
                        <input
                          type="checkbox"
                          id="form4Example4"
                          className="form-check-input me-2"
                        />{" "}
                        <label
                          className="form-check-label"
                          htmlFor="form4Example4"
                        >
                          Send me a copy of this message
                        </label>{" "}
                      </div>{" "}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Send
                      </button>{" "}
                    </form>{" "}
                  </div>{" "}
                  <div className="col-lg-7 mb-4 mb-md-0">
                    {" "}
                    <div className="row gx-lg-5">
                      {" "}
                      <div className="col-md-6 mb-5">
                        {" "}
                        <div className="d-flex align-items-start">
                          {" "}
                          <div className="flex-shrink-0">
                            {" "}
                            <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                              {" "}
                              <i className="fas fa-headset fa-lg text-white fa-fw"></i>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="flex-grow-1 ms-4">
                            {" "}
                            <p className="fw-bold mb-1">
                              Technical support
                            </p>{" "}
                            <p className="text-muted mb-0">
                              support@example.com
                            </p>{" "}
                            <p className="text-muted mb-0">+1 234-567-89</p>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="col-md-6 mb-5">
                        {" "}
                        <div className="d-flex align-items-start">
                          {" "}
                          <div className="flex-shrink-0">
                            {" "}
                            <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                              {" "}
                              <i className="fas fa-dollar-sign fa-lg text-white fa-fw"></i>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="flex-grow-1 ms-4">
                            {" "}
                            <p className="fw-bold mb-1">Sales questions</p>{" "}
                            <p className="text-muted mb-0">sales@example.com</p>{" "}
                            <p className="text-muted mb-0">+1 234-567-89</p>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="col-md-6 mb-5">
                        {" "}
                        <div className="d-flex align-items-start">
                          {" "}
                          <div className="flex-shrink-0">
                            {" "}
                            <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                              {" "}
                              <i className="fas fa-newspaper fa-lg text-white fa-fw"></i>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="flex-grow-1 ms-4">
                            {" "}
                            <p className="fw-bold mb-1">Press</p>{" "}
                            <p className="text-muted mb-0">press@example.com</p>{" "}
                            <p className="text-muted mb-0">+1 234-567-89</p>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="col-md-6 mb-5">
                        {" "}
                        <div className="d-flex align-items-start">
                          {" "}
                          <div className="flex-shrink-0">
                            {" "}
                            <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                              {" "}
                              <i className="fas fa-bug fa-lg text-white fa-fw"></i>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="flex-grow-1 ms-4">
                            {" "}
                            <p className="fw-bold mb-1">Bug report</p>{" "}
                            <p className="text-muted mb-0">bugs@example.com</p>{" "}
                            <p className="text-muted mb-0">+1 234-567-89</p>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </section>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
