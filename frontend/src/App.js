import Login from "./pages/LoginPage/Login";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
};

export default App;
