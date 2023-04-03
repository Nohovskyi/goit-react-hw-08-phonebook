import { createSelector } from '@reduxjs/toolkit';

export const getContactsList = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilterValue = state => state.filter.filter;

export const getFilteredContacts = createSelector(
  [getContactsList, getFilterValue],
  (contacts, inputData) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(inputData)
    );
  }
);
