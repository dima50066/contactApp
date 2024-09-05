import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
import Contact from '../Contact/Contact';
import EditContactForm from '../../components/UpdateContactForm/EditContactForm';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const [contactToDelete, setContactToDelete] = useState(null);
  const [contactToEdit, setContactToEdit] = useState(null);

  const handleDelete = contact => {
    setContactToDelete(contact);
  };

  const confirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete.id));
      setContactToDelete(null);
    }
  };

  const handleEdit = contact => {
    setContactToEdit(contact);
  };

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onEdit={() => handleEdit(contact)}
            onDelete={() => handleDelete(contact)}
          />
        ))}
      </ul>

      {/* Modal for delete confirmation */}
      <Dialog open={!!contactToDelete} onClose={() => setContactToDelete(null)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmDelete} color="primary">
            Yes
          </Button>
          <Button onClick={() => setContactToDelete(null)} color="secondary">
            No
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal for edit contact form */}
      <Dialog
        open={!!contactToEdit}
        onClose={() => setContactToEdit(null)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <EditContactForm
            contact={contactToEdit}
            onClose={() => setContactToEdit(null)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactList;
