import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { TextField, Button, Box } from '@mui/material';

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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
      }}
    >
      <TextField
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        required
        fullWidth
        type="tel"
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default EditContactForm;
