import { colors, createTheme } from '@mui/material';

const Colors = {
  orange: '#FB8D34',
  blue: '#99CCEE',
  grey: 'rgba(0, 0, 0, 0.5)',
  lightgrey: 'rgba(0, 0, 0, 0.3)',
  white: '#ffffff',
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.orange,
    },
    secondary: {
      main: Colors.grey,
    },

    grey: Colors.lightgrey,

    info: { main: Colors.blue },
  },
});

export default theme;
