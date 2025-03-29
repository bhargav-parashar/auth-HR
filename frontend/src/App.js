import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import UserContext from "./context/UserContext";
import useAuth from "./Hooks/useAuth";
import getTheme from "./Themes/getTheme";
import { createTheme, ThemeProvider } from "@mui/material";
import {useState, useMemo} from 'react';
import { darkTheme } from "./Themes/DarkTheme";
import { lightTheme } from "./Themes/LightTheme";

const App = () => {
  const { loggedInUser, setLoggedInUser } = useAuth();
  const [darkMode, setDarkMode ] = useState(true);
  const theme = useMemo(
    () => (darkMode ? createTheme(darkTheme()) : createTheme(lightTheme()) )
  );
  
  //getTheme(darkMode);

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
