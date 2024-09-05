import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
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
      name: '', // Додайте 'name' до initialValues
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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          aria-invalid={formik.errors.name ? 'true' : 'false'}
        />
        {formik.errors.name ? (
          <div role="alert">{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          aria-invalid={formik.errors.email ? 'true' : 'false'}
        />
        {formik.errors.email ? (
          <div role="alert">{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          aria-invalid={formik.errors.password ? 'true' : 'false'}
        />
        {formik.errors.password ? (
          <div role="alert">{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
