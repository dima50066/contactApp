import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Tabs
        value={location.pathname}
        textColor="primary"
        indicatorColor="primary"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
        variant="fullWidth"
      >
        <Tab
          component={NavLink}
          to="/"
          label="Home"
          value="/"
          sx={{ textTransform: 'none' }}
          style={{
            fontWeight: location.pathname === '/' ? 'bold' : 'normal',
            color: location.pathname === '/' ? '#1976d2' : 'inherit',
          }}
        />

        {isLoggedIn && (
          <Tab
            component={NavLink}
            to="/contacts"
            label="Contacts"
            value="/contacts"
            sx={{ textTransform: 'none' }}
            style={{
              fontWeight: location.pathname === '/contacts' ? 'bold' : 'normal',
              color: location.pathname === '/contacts' ? '#1976d2' : 'inherit',
            }}
          />
        )}
      </Tabs>
    </Box>
  );
};

export default Navigation;
