import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/contacts/operations';
import css from './ContactsPage.module.css';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { selectContacts } from '../../redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = contact => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2 className={css.subtitle}>Contacts</h2>
      <SearchBox />
      {isLoading ? (
        <b>Loading...</b>
      ) : (
        <ContactList contacts={contacts} onRemove={handleDeleteContact} />
      )}
    </>
  );
}
