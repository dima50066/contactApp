import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Box, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh', // Вирівнювання по висоті сторінки
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <LoginForm />
    </Box>
  );
}
