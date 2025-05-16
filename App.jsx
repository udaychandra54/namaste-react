import React from "react";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./src/components/RootLayout";
import About from "./src/pages/About";
import Contact from "./src/components/Contact";
import Error from "./src/pages/Error";
import Recipe from "./src/components/Recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/recipe/:id",
        element: <Recipe />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
