import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const AuthNav = () => {
  const location = useLocation();

  return (
    <Tabs
      value={location.pathname}
      textColor="primary"
      indicatorColor="primary"
      variant="fullWidth"
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Tab
        component={NavLink}
        to="/register"
        label="Register"
        value="/register"
        sx={{ flexGrow: 1, textTransform: 'none' }}
        style={{
          fontWeight: location.pathname === '/register' ? 'bold' : 'normal',
          color: location.pathname === '/register' ? '#1976d2' : 'inherit',
        }}
      />
      <Tab
        component={NavLink}
        to="/login"
        label="Log In"
        value="/login"
        sx={{ flexGrow: 1, textTransform: 'none' }}
        style={{
          fontWeight: location.pathname === '/login' ? 'bold' : 'normal',
          color: location.pathname === '/login' ? '#1976d2' : 'inherit',
        }}
      />
    </Tabs>
  );
};
