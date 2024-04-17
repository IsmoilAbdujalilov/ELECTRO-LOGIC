import Routes from "./Routes";
import { Loader } from "./components";
import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const Cart = lazy(() => import("./pages/Cart"));
  const Home = lazy(() => import("./pages/Home"));
  const User = lazy(() => import("./pages/User"));
  const Team = lazy(() => import("./pages/Team"));
  const Error = lazy(() => import("./pages/Error"));
  const Login = lazy(() => import("./pages/Login"));
  const About = lazy(() => import("./pages/About"));
  const Posts = lazy(() => import("./pages/Posts"));
  const Contact = lazy(() => import("./pages/Contact"));
  const Products = lazy(() => import("./pages/Products"));
  const Engineer = lazy(() => import("./pages/Engineer"));
  const PostsView = lazy(() => import("./pages/PostsView"));
  const ProductData = lazy(() => import("./pages/ProductData"));
  const ProductView = lazy(() => import("./pages/ProductView"));
  const Registration = lazy(() => import("./pages/Registration"));
  const EngineerView = lazy(() => import("./pages/EngineerView"));
  const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
  const EngineerProducts = lazy(() => import("./pages/EngineerProducts"));

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
          element: <Posts />,
          path: "/pages/posts",
        },
        {
          element: <EngineerProducts />,
          path: "/pages/engineer-products/:productName/:productId",
        },
        {
          element: <EngineerView />,
          path: "/pages/engineer-products/:productName/:productTitle/:id",
        },
        {
          element: <PostsView />,
          path: "/pages/posts/:postName/:id",
        },
        {
          element: <Cart />,
          path: "/pages/cart",
        },
        {
          element: <ProductView />,
          path: "/pages/productview/:id",
        },
        {
          element: <About />,
          path: "/pages/about",
        },
        {
          element: <Team />,
          path: "/pages/team",
        },
        {
          element: <Engineer />,
          path: "/pages/engineer",
        },
        {
          element: <Products />,
          path: "/pages/product",
        },
        {
          element: <ProductData />,
          path: "/pages/product/:productName/:productId",
        },
        {
          element: <ProductView />,
          path: "/pages/product/:productName/:productTitle/:id",
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
