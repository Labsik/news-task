import { createTheme } from "@mui/material/styles";

export enum Colors {
  PRIMARY = '#18191A',
  PRIMARY_VARIANT = '#414243',
  SECONDARY = '#939393',
  SECONDARY_VARIANT = '#F2F3F5',

  BLACK = '#000',
  WHITE = '#fff',
  RED = '#DE495D',
  YELLOW = '#F3A909',
  GREEN = '#36CD73',
  GREEN_DARK = '#00C8A3',
  BLUE = '#40AADF',
  BLUE_SECONDARY = '#3992BF',
  BLUE_VARIANT = '#00ACE4',
  BLUE_DARK = '#59B8E4',
  ORANGE = '#FFA600',
  LIGHT_YELLOW = '#FFF5DF',
  LIGHT_ORANGE = '#F7CC79',
  LIGHT_BLUE = '#E1F3FB',
  LIGHT_RED = '#FBE6EA',
  LIGHT_GREEN = '#DBF9F3',
  GRAY = '#AEB8C7',
  GRAY3 = '#939393',
  GRAY4 = '#414243',
  DARK_GRAY = '#9AA7B8',

  GEYSER = '#DCE1E7',
  BACKGROUND = '#F2F3F5',
  GHOST = '#c5cad1',

  PRIMARY_ON_PRESS = '#007BAD',

  // transparent
  BLACK_50 = 'rgba(0,0,0,0.5)',
  BLACK_10 = 'rgba(0,0,0,0.1)',
  // status colors
  REMOTE_DARK = YELLOW,

  HIGHLIGHT = LIGHT_BLUE,

  // TODO: refactor or remove
  onPrimary = '#ffffff',
  onSecondary = '#18191A',
  onBackground = '#788698',
  onSurface = '#18191A',
  onError = '#ffffff',
}


export const muiTheme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          height: '3.6rem',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '.4rem',
          backgroundColor: Colors.WHITE,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: '4.1rem',
          letterSpacing: 1.25,
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        message: {
          fontSize: '1.6rem',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: '1rem 2.5rem',
          '&.Mui-selected': { backgroundColor: "orange", }
        }
      }
    },

    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '16px',
        },
        body: {
          lineHeight: 1.15,
          minHeight: '100vh',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: "'Nunito Sans', sans-serif",
          color: Colors.PRIMARY,
          fontSize: '1.6rem',
          fontWeight: 300,
        },
        button: {
          fontFamily: 'Nunito Sans, sans-serif',
        },
        a: {
          textDecoration: 'none',
          color: Colors.PRIMARY,
        },
        '#root': {
          minWidth: '100vw',
          minHeight: '100vh',
        },
      },
    },
  },
  spacing: 8,
});
