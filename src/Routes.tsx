import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

const Routes = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 510px)" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Routes;
