import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Example primary color
    },
    secondary: {
      main: '#dc3545', // Example secondary color
    },
    // Add more colors as needed
  },
  typography: {
    // Define typography here
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem', // Example
    },
    // Define other text styles
  },
  // Add additional theme settings if needed
});

export default theme;
