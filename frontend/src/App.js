import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import UserContext from "./context/UserContext";
import useAuth from "./Hooks/useAuth";
import theme from "./Themes/theme";
import { ThemeProvider } from "@mui/material";

const App = () => {
  const { loggedInUser, setLoggedInUser } = useAuth();

  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Outlet />
        </ThemeProvider>
      </UserContext.Provider>
    </>
  );
};

export default App;
