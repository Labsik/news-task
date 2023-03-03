import { createTheme } from "@mui/material/styles";
import overrides from "./overrides";

export enum Colors {
  WHITE = "#fff",
  DARKGRAY = '#a9a9a9'
}

export const muiTheme = createTheme({
  // components: {
  //   MuiButtonBase: {
  //     styleOverrides: {
  //       root: {
  //         height: "3.6rem",
  //         '&:hover': {
  //           color: 'white',
  //         },
  //       },
  //     },
  //   },
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         minWidth: "4.1rem",
  //         letterSpacing: 1.25,
  //       },
  //     },
  //   },
  //   MuiSnackbarContent: {
  //     styleOverrides: {
  //       message: {
  //         fontSize: "1.6rem",
  //       },
  //     },
  //   },
  //   MuiMenuItem: {
  //     styleOverrides: {
  //       root: {
  //         padding: "1rem 2.5rem",
  //         "&.Mui-selected": { background: "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)" },
  //       },
  //     },
  //   },
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       html: {
  //         fontSize: "16px",
  //       },
  //       body: {
  //         lineHeight: 1.15,
  //         minHeight: "100vh",
  //         WebkitFontSmoothing: "antialiased",
  //         MozOsxFontSmoothing: "grayscale",
  //         fontFamily: "'Nunito Sans', sans-serif",
  //         color: 'white',
  //         fontSize: "1.2rem",
  //         fontWeight: 300,
  //         overflowX: "hidden",
  //       },
  //       button: {
  //         fontFamily: "Nunito Sans, sans-serif",
  //       },
  //       a: {
  //         textDecoration: 'none',
  //       },
  //       "#root": {
  //         minWidth: "100vw",
  //         minHeight: "100vh",
  //         background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
  //       },
  //     },
  //   },
  // },
  components: overrides,
  spacing: 8,
});
