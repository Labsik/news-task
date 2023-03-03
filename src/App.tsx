import React from "react";

import { HashRouter } from "react-router-dom";
import { styled, CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./theme";
import { AuthProvider } from "./context/AuthProvider";
import { AppRoutes } from "./router/Routes";
import { SnackbarProvider } from "notistack";
import { Header } from "./components";

const AppWrap = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  minWidth: "100vw",
  position: "relative",
  overflow: "hidden",
}));

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Provider store={store}>
          <ThemeProvider theme={muiTheme}>
            <SnackbarProvider
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
              maxSnack={3}
              autoHideDuration={5000}
            >
              <AppWrap>
                <CssBaseline />
                <Header />
                <AppRoutes />
              </AppWrap>
            </SnackbarProvider>
          </ThemeProvider>
        </Provider>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
