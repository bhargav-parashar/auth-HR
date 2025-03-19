import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useState } from "react";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({ username: "", role: "" });
  
  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <CssBaseline />
        <Outlet />
      </UserContext.Provider>
    </>
  );
};

export default App;
