import lodash from "lodash";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

const Posts = () => {
  type typePosts = {
    id: number;
    date: string;
    image: string;
    name: string;
    author: string;
    authorImage: string;
    description: string;
  };

  return (
    <div className="mdb-col-lg-8 mdb-h-100" id="posts">
      <div className="container">
        <h2 className="text-center">Последние статьи</h2>
        <div
          className="ps mdb-rounded-3 mdb-position-relative mdb-h-100 ps--active-y"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        >
          <div id="preview" className="row">
            {posts.length > 0 &&
              posts.map((el: typePosts) => {
                return (
                  <div
                    draggable="false"
                    className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12"
                    data-draggable="true"
                    style={{ position: "relative" }}
                  >
                    <Link
                      to={`/pages/posts/${`${el.name.split(" ").join("-")}/${
                        el.id
                      }`}`}
                    >
                      <section
                        draggable="false"
                        className="pt-5 text-dark"
                        data-v-271253ee=""
                      >
                        <section className="mb-10">
                          <img
                            src={el.image}
                            className="img-fluid shadow-1-strong rounded-5 mb-4"
                            data-builder-edit="image"
                            data-builder-name="image1"
                            aria-controls="#picker-editor"
                            draggable="false"
                          />
                          <div className="row align-items-center mb-4">
                            <div className="col-lg-8">
                              <img
                                src={el.authorImage}
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
                                Опубликовано
                                <u
                                  data-builder-edit="text"
                                  data-builder-name="text1"
                                  contentEditable="true"
                                >
                                  {el.date}
                                </u>{" "}
                              </span>{" "}
                              <a
                                href="undefined"
                                className="text-dark"
                                data-builder-edit="text"
                                data-builder-href="https://mdb-builder.com/"
                                aria-controls="#picker-editor"
                                draggable="false"
                              >
                                {el.author}
                              </a>
                            </div>
                          </div>
                          <h2
                            className="fw-bold mb-4"
                            data-builder-edit="text"
                            data-builder-name="text2"
                          >
                            {el.name}
                          </h2>
                          <p data-builder-edit="text" data-builder-name="text3">
                            {lodash.truncate(`${el.description}`, {
                              length: 835,
                              omission: "...",
                            })}
                          </p>
                        </section>
                      </section>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
