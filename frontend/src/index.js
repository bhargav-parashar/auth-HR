import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from '../src/Pages/RegisterPage/Register';
import Login from '../src/Pages/LoginPage/Login';

const router = createBrowserRouter([
    {
      path:"/",
      element :  <App />,
      children : [
        
        {
          path:"/register",
          element : <RegisterPage/>
        },
        
        {
          path:"/",
          element : <Login/>
        },
      ]
    }
  ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <App/>
     <RouterProvider router={router}/>
);
