import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import css from './EditContactForm.module.css';

const EditContactForm = ({ contact, onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setNumber(contact.number);
    }
  }, [contact]);

  const handleSubmit = e => {
    e.preventDefault();
    if (contact) {
      dispatch(updateContact({ id: contact.id, name, number }));
      onClose();
    }
  };

  if (!contact) return null;

  return (
    <form className={css.editForm} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EditContactForm;
