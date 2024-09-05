import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Обов’язкове поле';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Невірна адреса електронної пошти';
    }
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log('Успішний вхід');
      })
      .catch(() => {
        console.log('Помилка входу');
      });

    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange, handleBlur, values }) => (
        <Form>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '300px',
              margin: '0 auto',
            }}
          >
            <TextField
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Log in
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
