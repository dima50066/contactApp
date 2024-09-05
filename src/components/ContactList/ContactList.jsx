import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import Contact from '../Contact/Contact';
import EditContactForm from '../../components/UpdateContactForm/EditContactForm';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

Modal.setAppElement('#root');

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

      <Modal
        isOpen={!!contactToDelete}
        onRequestClose={() => setContactToDelete(null)}
        className={css.modalContent}
        overlayClassName={css.modalBackdrop}
        closeTimeoutMS={300}
      >
        <div className={css.confirmation}>
          <p>Are you sure you want to delete this contact?</p>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={() => setContactToDelete(null)}>No</button>
        </div>
      </Modal>

      <Modal
        isOpen={!!contactToEdit}
        onRequestClose={() => setContactToEdit(null)}
        className={css.modalContent}
        overlayClassName={css.modalBackdrop}
        closeTimeoutMS={300}
      >
        <EditContactForm
          contact={contactToEdit}
          onClose={() => setContactToEdit(null)}
        />
      </Modal>
    </>
  );
};

export default ContactList;
