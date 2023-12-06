import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f5f5f5', p: 2, textAlign: 'center', width: '100%' }}>
      <Link
        href="https://github.com/Scorpio-Winner"
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        color="inherit"
        sx={{ mr: 1 }}
      >
        GitHub
      </Link>
      <Typography variant="body2" color="textSecondary" sx={{ marginRight: 0 }}>
        &copy; 2023
      </Typography>
    </Box>
  );
};

export default Footer;