import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <section className="login-background">
      <div className="container registration d-flex align-items-center justify-content-center">
        <div className="card auth-card">
          <div className="card-body p-4">
            <ul className="nav nav-pills nav-fill mb-3">
              <li
                className="nav-item"
                role="presentation"
                style={{ cursor: "pointer" }}
              >
                <Link to="/pages/registration" className="nav-link">
                  Register
                </Link>
              </li>
              <li
                className="nav-item"
                role="presentation"
                style={{ cursor: "pointer" }}
              >
                <Link to="/pages/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div
                role="tabpanel"
                aria-labelledby="tab-login"
                className="tab-pane fade show active"
              >
                <form>
                  <div className="text-center mb-3">
                    <p>Sign in with:</p>
                    <button
                      className="ripple ripple-surface btn btn-primary btn-floating mx-1"
                      type="button"
                      role="button"
                    >
                      <i className="fab fa-google"></i>
                    </button>
                    <button
                      type="button"
                      role="button"
                      className="ripple ripple-surface btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                  <p className="text-center">or:</p>
                  <div className="form-outline">
                    <input
                      id="email"
                      type="email"
                      className="form-control mb-4"
                    />
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <div className="form-notch">
                      <div className="form-notch-leading"></div>
                      <div
                        style={{ width: "40px" }}
                        className="form-notch-middle"
                      ></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  <div className="form-outline">
                    <input
                      type="password"
                      id="loginPassword"
                      className="form-control mb-4"
                    />
                    <label className="form-label" htmlFor="loginPassword">
                      New password
                    </label>
                    <div className="form-notch">
                      <div className="form-notch-leading"></div>
                      <div
                        style={{ width: "90px" }}
                        className="form-notch-middle"
                      ></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  <button
                    className="ripple ripple-surface btn btn-primary btn-block mb-4"
                    type="submit"
                    role="button"
                  >
                    Send To Code
                  </button>
                  <div className="text-center">
                    <p>
                      Not a member?{" "}
                      <Link to="/pages/registration">Register</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
