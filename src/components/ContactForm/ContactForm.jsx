import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = ({}) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters long')
      .max(50, 'Name must be at most 50 characters long')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Number must be at least 3 characters long')
      .max(50, 'Number must be at most 50 characters long')
      .required(),
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
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formInputWrapper}>
            <label htmlFor="nameId">Name</label>
            <Field
              as="input"
              autoComplete="on"
              type="text"
              name="name"
              id="nameId"
              required
              className={css.formInput}
            />

            <ErrorMessage
              name="name"
              component="span"
              className={css.formInputErrorMsg}
            />
          </div>

          <div className={css.formInputWrapper}>
            <label htmlFor="telId" className={css.label}>
              Number
            </label>
            <Field
              type="tel"
              name="number"
              className={css.formInput}
              id="telId"
              required
            />

            <ErrorMessage
              name="number"
              component="span"
              className={css.formInputErrorMsg}
            />
          </div>

          <button className={css.formSbmBtn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
