import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar'; // Ensure this is the correct path to your NavBar component
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


// Define your theme here
const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    // You can define other colors, typography, breakpoints, etc., here.
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides a consistent baseline style */}
      <Router>
        <NavBar /> {/* This is your Material-UI NavBar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
