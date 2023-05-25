import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home, Login, CreateAccount } from "./pages";
import { defaultTheme } from "./utils";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
]);

export default () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};
