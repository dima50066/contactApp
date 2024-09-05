import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { TextField, Button, Box } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters long')
      .max(50, 'Name must be at most 50 characters long')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Number must be at least 3 characters long')
      .max(50, 'Number must be at most 50 characters long')
      .required('Number is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact({ ...values, id: nanoid() }));
        resetForm();
      }}
    >
      {({
        errors,
        touched,
        handleChange,
        handleBlur,
        values,
        isSubmitting,
      }) => (
        <Box
          component={Form}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '300px',
          }}
        >
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
          />
          <TextField
            label="Number"
            name="number"
            type="tel"
            variant="outlined"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.number && Boolean(errors.number)}
            helperText={touched.number && errors.number}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitting}
          >
            Add contact
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default ContactForm;
