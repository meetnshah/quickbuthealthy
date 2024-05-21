import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div onClick={handleDrawerToggle}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/menu">
          <ListItemText primary="Menu" />
        </ListItem>
        <ListItem button component={Link} to="/plans">
          <ListItemText primary="Subscription Plans" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/signup">
          <ListItemText primary="Sign Up" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static" className="navBar">
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component={Link} to="/" className="navTitle">
          Quick But Healthy
        </Typography>
        {!isMobile && (
          <div className="navLinks">
            <Button color="inherit" component={Link} to="/menu">
              Menu
            </Button>
            <Button color="inherit" component={Link} to="/plans">
              Subscription Plans
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button variant="contained" component={Link} to="/signup" className="signUpButton">
              Sign Up
            </Button>
          </div>
        )}
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
