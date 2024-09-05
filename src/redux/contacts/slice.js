import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
import { logOut } from '../auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })

      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })

      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateContact.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        );
      })

      .addCase(updateContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.filter = '';
        state.loading = false;
        state.error = null;
      });
  },
});

export default contactsSlice.reducer;
