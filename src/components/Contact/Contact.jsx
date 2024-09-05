import React from 'react';
import { FaUser, FaPhone } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const Contact = ({ contact, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        marginBottom: 2,
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography
          variant="body1"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <FaUser />
          {contact.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <FaPhone />
          {contact.number}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          onClick={() => onEdit(contact)}
          variant="contained"
          color="primary"
        >
          Edit
        </Button>
        <Button
          onClick={() => onDelete(contact.id)}
          variant="outlined"
          color="secondary"
        >
          Delete
        </Button>
      </Box>
    </Card>
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
