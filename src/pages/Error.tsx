import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{ minHeight: "100vh" }}
      className="error d-flex align-items-center justify-content-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section className="my-5 text-center">
              <h1 className="display-1">404</h1>
              <h4 className="mb-4">Page not found</h4>
              <p className="mb-0">
                The Page you are looking for doesn't exist or an other error
                eccured.
              </p>
              <p className="mb-4">
                Go back, or ahead over to example.com to choose a new direction.
              </p>
              <button
                role="button"
                onClick={() => navigate("/")}
                className="ripple ripple-surface btn btn-primary"
              >
                Go back to the homepage
              </button>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
