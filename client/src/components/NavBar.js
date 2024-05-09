import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" color="primary" sx={{ padding: '0 10px' }}>
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Quick But Healthy
        </Typography>
        {!isMobile && (
          <React.Fragment>
            <Button color="inherit" component={Link} to="/menu" sx={{ marginRight: '10px' }}>
              Menu
            </Button>
            <Button color="inherit" component={Link} to="/plans" sx={{ marginRight: '10px' }}>
              Subscription Plans
            </Button>
            <Button color="inherit" component={Link} to="/about" sx={{ marginRight: '10px' }}>
              About Us
            </Button>
          </React.Fragment>
        )}
        <Button color="inherit" component={Link} to="/login" sx={{ marginRight: '10px' }}>
          Login
        </Button>
        <Button variant="contained" component={Link} to="/signup" sx={{ backgroundColor: '#ffcc00', color: 'black' }}>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
