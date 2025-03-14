import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "../src/Pages/RegisterPage/Register";
import Login from "../src/Pages/LoginPage/Login";
import { SnackbarProvider,closeSnackbar } from "notistack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },

      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider
  maxSnack={1}
  anchorOrigin={{
    vertical: "bottom",
    horizontal : "center"
  }}
  preventDuplicate
  action={ (snackbarId) =>(
    <button 
    onClick={()=>closeSnackbar(snackbarId)}
    style={{
      background:"transparent",
      border:"none",
      fontSize:'15px',
      fontWeight:'bold',
      color:'white'
    }}
    >
      X
    </button>
  )

  }
  >
    <RouterProvider router={router} />
  </SnackbarProvider>
);
