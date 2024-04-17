import App from "./App.tsx";
import "./assets/css/index.css";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./store/index.ts";
import "react-toastify/dist/ReactToastify.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
