import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Toolbar } from '@mui/material';

const Navigation = () => {
  return (
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Link
          component={RouterLink}
          to="/orders"
          color="black"
          underline="none"
          sx={{
            marginRight: 2,
            '&:hover': {
              textDecoration: 'underline',
            },
            fontSize: '1.2rem',
          }}
        >
          All orders
        </Link>
        <Link
          component={RouterLink}
          to="/orders/create"
          color="black"
          underline="none"
          sx={{
            marginRight: 2,
            '&:hover': {
              textDecoration: 'underline',
            },
            fontSize: '1.2rem',
          }}
        >
          Create order
        </Link>
        <Link
          component={RouterLink}
          to="/report"
          color="black"
          underline="none"
          sx={{
            marginRight: 2,
            '&:hover': {
              textDecoration: 'underline',
            },
            fontSize: '1.2rem',
          }}
        >
          Report
        </Link>
      </Box>
    </Toolbar>
  );
};

export default Navigation;