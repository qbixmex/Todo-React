import { createTheme, ThemeOptions } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: 'hsla(270, 90%, 65%, 0.8)',
      main: 'hsla(270, 90%, 65%, 0.65)',
      dark: 'hsla(270, 90%, 65%, 0.28)',
    },
    background: {
      paper: 'hsl(0, 0%, 7%)',
      default: 'hsla(0, 0%, 0%, 0.96)',
    }
  }
});