import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import { register } from '../../redux/auth/operations';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Must be 6 characters or more';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '300px',
        margin: '0 auto',
      }}
    >
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={Boolean(formik.errors.name)}
        helperText={formik.errors.name}
        fullWidth
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={Boolean(formik.errors.email)}
        helperText={formik.errors.email}
        fullWidth
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        variant="outlined"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={Boolean(formik.errors.password)}
        helperText={formik.errors.password}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </Box>
  );
};
