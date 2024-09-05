import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';

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
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          placeholder="Електронна пошта"
          as="input"
          type="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <Field type="password" name="password" />

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};
