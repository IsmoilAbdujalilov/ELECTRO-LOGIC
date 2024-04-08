import Routes from "./Routes";
import { Loader } from "./components";
import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const Home = lazy(() => import("./pages/Home"));
  const User = lazy(() => import("./pages/User"));
  const Error = lazy(() => import("./pages/Error"));
  const Login = lazy(() => import("./pages/Login"));
  const Cart = lazy(() => import("./pages/Cart.tsx"));
  const Contact = lazy(() => import("./pages/Contact"));
  const PostsView = lazy(() => import("./pages/PostsView"));
  const Registration = lazy(() => import("./pages/Registration"));
  const ProductView = lazy(() => import("./pages/ProductView.tsx"));
  const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          element: <User />,
          path: "/pages/user",
        },
        {
          element: <Contact />,
          path: "/pages/contact",
        },
        {
          element: <PostsView />,
          path: "/pages/posts/:id",
        },
        {
          element: <Cart />,
          path: "/pages/cart",
        },
        {
          element: <ProductView />,
          path: "/pages/productview/:id",
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      element: <Registration />,
      path: "/pages/registration",
    },
    {
      element: <Login />,
      path: "/pages/login",
    },
    {
      element: <ForgotPassword />,
      path: "/pages/forgotpassword",
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routers} />
    </Suspense>
  );
};

export default App;
