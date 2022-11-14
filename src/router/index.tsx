import { lazy, Suspense } from "react";
import Home from "../views/Home";
// import About from '../views/About'
import Login from '../views/Login/index'
const About = lazy(() => import("../views/About"));
const User = lazy(() => import("../views/User"));
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
const Page301 = lazy(() => import("../views/Page301"));

// 重定向组件
import { Navigate } from "react-router-dom";

const withLoadingComponent = (comp:JSX.Element ) =>(
  <Suspense fallback={<div>Loading...</div>}>
   {comp}
</Suspense>
)

const routes = [
  {
    path: "/",
    element: <Navigate to="/Page1"></Navigate>,
  },
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1/>)

      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2/>)
      },
      {
        path: "/page3/page301",
        element: withLoadingComponent(<Page301/>)
      },

    ]

  },
  {   path: "/login",
  element: <Login />

  },
  {
    path: "/*",
    element: <Navigate  to="/page1" />

  }


];

export default routes;
