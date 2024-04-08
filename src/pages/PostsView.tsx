import { Link } from "react-router-dom";

const PostsView = () => {
  return (
    <div style={{ position: "relative" }} className="pt-5">
      <div className="container">
        <nav aria-label="breadcrumb" className="py-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Post View
            </li>
          </ol>
        </nav>
        <section draggable="false">
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              harum tempore cupiditate asperiores provident, itaque, quo ex
              iusto rerum voluptatum delectus corporis quisquam maxime a ipsam
              nisi sapiente qui optio! Dignissimos harum quod culpa officiis
              suscipit soluta labore! Expedita quas, nesciunt similique autem,
              sunt, doloribus pariatur maxime qui sint id enim. Placeat, maxime
              labore. Dolores ex provident ipsa impedit, omnis magni earum. Sed
              fuga ex ducimus consequatur corporis, architecto nesciunt vitae
              ipsum consequuntur perspiciatis nulla esse voluptatem quos dolorum
              delectus similique eum vero in est velit quasi pariatur blanditiis
              incidunt quam.`,
            </p>{" "}
          </section>
        </section>
      </div>
    </div>
  );
};

export default PostsView;
