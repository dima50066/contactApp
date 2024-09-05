import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { Box, Typography, Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 1,
        boxShadow: 0,
      }}
    >
      <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
