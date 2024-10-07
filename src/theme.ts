import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@fontsource/roboto/400.css';

let theme = createTheme({
    palette: {
      primary: {
        main: '#524d4d',
      },
      secondary: {
        main: '#4f8e3e',
      },
    },
    typography:{
      fontFamily: [
        "Roboto"
    ].join(','),
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;