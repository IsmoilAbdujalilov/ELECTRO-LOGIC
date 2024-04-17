import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");

  const submitFormData = async (e: any) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/pages/login");
    } catch (error) {}
    toast.error("Вы не смогли зарегистрироваться", {
      autoClose: 2000,
      draggable: true,
      pauseOnHover: false,
      position: "top-right",
    });
  };

  return (
    <section className="registration-background">
      <ToastContainer />
      <div className="container registration d-flex align-items-center justify-content-center">
        <div className="card auth-card">
          <div className="card-body p-4">
            <ul className="nav nav-pills nav-fill mb-3">
              <li
                className="nav-item"
                role="presentation"
                style={{ cursor: "pointer" }}
              >
                <Link to="/pages/registration" className="nav-link active">
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
                <form onSubmit={(e) => submitFormData(e)}>
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
                      type="text"
                      value={name}
                      id="loginName"
                      className="form-control mb-4"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label className="form-label" htmlFor="loginName">
                      Username
                    </label>
                    <div className="form-notch">
                      <div className="form-notch-leading"></div>
                      <div
                        style={{ width: "65px" }}
                        className="form-notch-middle"
                      ></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  <label htmlFor="email">Email</label>
                  <div className="form-outline">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      className="form-control mb-4"
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="form-notch">
                      <div className="form-notch-leading"></div>
                      <div className="form-notch-middle"></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  <label htmlFor="password">Password</label>
                  <div className="form-outline">
                    <input
                      type="password"
                      value={password}
                      id="loginPassword"
                      className="form-control mb-4"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="form-notch">
                      <div className="form-notch-leading"></div>
                      <div className="form-notch-middle"></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  {/* <div className="d-flex pb-3 justify-content-end">
                    <Link to="/pages/forgotpassword">Forgot password?</Link>
                  </div> */}
                  <button
                    className="ripple ripple-surface btn btn-primary btn-block mb-4"
                    type="submit"
                    role="button"
                  >
                    Sign up
                  </button>
                  <div className="text-center">
                    <p>
                      Not a member? <Link to="/pages/login">Login</Link>
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

export default Registration;
