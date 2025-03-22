import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import UserContext from "./context/UserContext";
import useAuth from "./Hooks/useAuth";
import getTheme from "./Themes/getTheme";
import { ThemeProvider } from "@mui/material";
import {useState} from 'react';

const App = () => {
  const { loggedInUser, setLoggedInUser } = useAuth();
  const [darkMode, setDarkMode ] = useState(true);
  const theme = getTheme(darkMode);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser, darkMode, setDarkMode }}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Outlet />
        </ThemeProvider>
      </UserContext.Provider>
    </>
  );
};

export default App;
