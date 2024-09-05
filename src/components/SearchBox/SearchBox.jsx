import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import { TextField, Box, Typography } from '@mui/material';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
      }}
    >
      <Typography variant="body1" component="p">
        Find contacts by name or phone number
      </Typography>
      <TextField
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter name or phone number..."
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 400 }}
      />
    </Box>
  );
};

export default SearchBox;
