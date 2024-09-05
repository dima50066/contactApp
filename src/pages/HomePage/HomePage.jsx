import React from 'react';
import { Box, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        bgcolor: 'background.default',
        p: 3,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'text.primary',
        }}
      >
        Welcome to the Contacts App!
      </Typography>
    </Box>
  );
}
