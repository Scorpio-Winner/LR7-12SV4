import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Navigation from './Navigation';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#f5f5f5' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
          Produce Tracking
        </Typography>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
}

export default Header;