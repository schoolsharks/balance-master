import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    accent?: string; 
    red?: string; 
    grey?:string;

  }

  interface SimplePaletteColorOptions {
    accent?: string; 
    red?: string; 
    grey?:string;
  }

  interface Palette {
    tertiary: PaletteColor; 
  }

  interface PaletteOptions {
    tertiary?: SimplePaletteColorOptions; 
  }
}

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      red:"#FF3B30",
      grey:"#383838"
    },
    secondary: {
      main: "#000000",
    },
    tertiary: {
      main: "#6A6464",
    },
    text: {
      primary: '#201f1e',
      secondary: "#6A6464",
    },
  },
  typography: {
    fontFamily: 'Red Hat Display',
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '1.25rem',
    },
  },
});

export default theme;
