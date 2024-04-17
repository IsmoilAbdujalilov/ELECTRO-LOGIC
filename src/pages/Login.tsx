import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitData = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user: any = auth.currentUser;
      localStorage.setItem(
        "token",
        JSON.stringify({
          email,
          token: user?.stsTokenManager.accessToken,
        })
      );
      navigate("/");
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
        });
      }
      toast.success("Вы вошли в систему", {
        autoClose: 2000,
        draggable: true,
        pauseOnHover: false,
        position: "top-right",
      });
    } catch (error) {
      toast.error("Вы не смогли войти", {
        autoClose: 2000,
        draggable: true,
        pauseOnHover: false,
        position: "top-right",
      });
    }
  };
  return (
    <section className="login-background">
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
                <Link to="/pages/registration" className="nav-link">
                  Register
                </Link>
              </li>
              <li
                className="nav-item"
                role="presentation"
                style={{ cursor: "pointer" }}
              >
                <Link to="/pages/login" className="nav-link active">
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
                <form onSubmit={(e) => submitData(e)}>
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
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
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
                  <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-between">
                      <div className="form-check">
                        <input
                          id="check"
                          type="checkbox"
                          className="form-check-input  mb-3 mb-md-0"
                        />
                        <label htmlFor="check" className="form-check-label">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <Link to="/pages/forgotpassword">Forgot password?</Link>
                    </div>
                  </div>
                  <button
                    className="ripple ripple-surface btn btn-primary btn-block mb-4"
                    type="submit"
                    role="button"
                  >
                    Sign in
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

export default Registration;
