import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Toolbar } from '@mui/material';

const Navigation = () => {
  const [role, setRole] = useState(localStorage.getItem("role"));


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.reload();
  };


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
        {role === 'admin' && (
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
        )}
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
        <Link
          color="black"
          underline="none"
          onClick={handleLogout}
          sx={{
            marginRight: 2,
            '&:hover': {
              textDecoration: 'underline',
            },
            fontSize: '1.2rem',
          }}
        >
          Logout
        </Link>
      </Box>
    </Toolbar>
  );
};

export default Navigation;