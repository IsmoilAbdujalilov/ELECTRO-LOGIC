import lodash from "lodash";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div className="mdb-col-lg-8 mdb-h-100" id="posts">
      <div className="container">
        <h2 className="text-center">Latest Posts</h2>
        <div
          className="ps mdb-rounded-3 mdb-position-relative mdb-h-100 ps--active-y"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        >
          <div id="preview" className="row">
            <div
              draggable="false"
              className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12"
              data-draggable="true"
              style={{ position: "relative" }}
            >
              <Link to="/pages/posts/1">
                <section
                  draggable="false"
                  className="pt-5 text-dark"
                  data-v-271253ee=""
                >
                  <section className="mb-10">
                    <img
                      src="https://mdbootstrap.com/img/new/slides/198.jpg"
                      className="img-fluid shadow-1-strong rounded-5 mb-4"
                      data-builder-edit="image"
                      data-builder-name="image1"
                      aria-controls="#picker-editor"
                      draggable="false"
                    />
                    <div className="row align-items-center mb-4">
                      <div className="col-lg-7">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                          className="rounded-circle me-2"
                          height="35"
                          alt=""
                          loading="lazy"
                          data-builder-edit="image"
                          data-builder-name="image2"
                          aria-controls="#picker-editor"
                          draggable="false"
                        />
                        <span>
                          {" "}
                          Published
                          <u
                            data-builder-edit="text"
                            data-builder-name="text1"
                            contentEditable="true"
                          >
                            15.07.2020
                          </u>{" "}
                          by
                        </span>{" "}
                        <a
                          href="undefined"
                          className="text-dark"
                          data-builder-edit="text"
                          data-builder-href="https://mdb-builder.com/"
                          aria-controls="#picker-editor"
                          draggable="false"
                        >
                          Anna Maria Doe
                        </a>
                      </div>
                    </div>
                    <h2
                      className="fw-bold mb-4"
                      data-builder-edit="text"
                      data-builder-name="text2"
                    >
                      An intriguing title for an interesting article
                    </h2>
                    <p data-builder-edit="text" data-builder-name="text3">
                      {lodash.truncate(
                        `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi harum tempore cupiditate asperiores provident,
                    itaque, quo ex iusto rerum voluptatum delectus corporis
                    quisquam maxime a ipsam nisi sapiente qui optio! Dignissimos
                    harum quod culpa officiis suscipit soluta labore! Expedita
                    quas, nesciunt similique autem, sunt, doloribus pariatur
                    maxime qui sint id enim. Placeat, maxime labore. Dolores ex
                    provident ipsa impedit, omnis magni earum. Sed fuga ex
                    ducimus consequatur corporis, architecto nesciunt vitae
                    ipsum consequuntur perspiciatis nulla esse voluptatem quos
                    dolorum delectus similique eum vero in est velit quasi
                    pariatur blanditiis incidunt quam.`,
                        {
                          length: 835,
                          omission: "...",
                        }
                      )}
                    </p>
                  </section>
                </section>
              </Link>
            </div>
            <div
              className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12"
              data-draggable="true"
              style={{ position: "relative" }}
              draggable="false"
            >
              <Link to="/pages/posts/2">
                <section
                  draggable="false"
                  data-v-271253ee=""
                  className="pt-5 text-dark"
                >
                  <section className="mb-10">
                    {" "}
                    <img
                      src="https://mdbootstrap.com/img/new/slides/198.jpg"
                      className="img-fluid shadow-1-strong rounded-5 mb-4"
                      alt=""
                      data-builder-edit="image"
                      data-builder-name="image1"
                      aria-controls="#picker-editor"
                      draggable="false"
                    />{" "}
                    <div className="row align-items-center mb-4">
                      <div className="col-lg-7">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                          className="rounded-circle me-2"
                          height="35"
                          alt=""
                          loading="lazy"
                          data-builder-edit="image"
                          data-builder-name="image2"
                          aria-controls="#picker-editor"
                          draggable="false"
                        />
                        <span>
                          {" "}
                          Published{" "}
                          <u data-builder-edit="text" data-builder-name="text1">
                            15.07.2020
                          </u>{" "}
                          by
                        </span>{" "}
                        <a
                          href="undefined"
                          className="text-dark"
                          data-builder-edit="text"
                          data-builder-href="https://mdb-builder.com/"
                          aria-controls="#picker-editor"
                          draggable="false"
                        >
                          Anna Maria Doe
                        </a>{" "}
                      </div>
                    </div>{" "}
                    <h2
                      className="fw-bold mb-4"
                      data-builder-edit="text"
                      data-builder-name="text2"
                    >
                      An intriguing title for an interesting article
                    </h2>{" "}
                    <p data-builder-edit="text" data-builder-name="text3">
                      {lodash.truncate(
                        `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi harum tempore cupiditate asperiores provident,
                    itaque, quo ex iusto rerum voluptatum delectus corporis
                    quisquam maxime a ipsam nisi sapiente qui optio! Dignissimos
                    harum quod culpa officiis suscipit soluta labore! Expedita
                    quas, nesciunt similique autem, sunt, doloribus pariatur
                    maxime qui sint id enim. Placeat, maxime labore. Dolores ex
                    provident ipsa impedit, omnis magni earum. Sed fuga ex
                    ducimus consequatur corporis, architecto nesciunt vitae
                    ipsum consequuntur perspiciatis nulla esse voluptatem quos
                    dolorum delectus similique eum vero in est velit quasi
                    pariatur blanditiis incidunt quam.`,
                        {
                          length: 835,
                          omission: "...",
                        }
                      )}
                    </p>{" "}
                  </section>
                </section>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
