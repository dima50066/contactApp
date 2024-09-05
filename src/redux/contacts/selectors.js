import { createSelector } from 'reselect';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().startsWith(normalizedFilter) ||
        contact.number.toLowerCase().startsWith(normalizedFilter)
    );
  }
);
