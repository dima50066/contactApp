import React from 'react';
import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Contact = ({ contact, onEdit, onDelete }) => {
  return (
    <li className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactText}>
          <FaUser />
          {contact.name}
        </p>
        <p className={css.contactText}>
          <FaPhone />
          {contact.number}
        </p>
        <button
          onClick={() => onEdit(contact)}
          type="button"
          className={css.contactEditBtn}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(contact.id)}
          type="button"
          className={css.contactDeleteBtn}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
