import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { Box, Typography } from '@mui/material';

export default function RegisterPage() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Registration
      </Typography>
      <RegistrationForm />
    </Box>
  );
}
