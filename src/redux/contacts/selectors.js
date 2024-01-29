// import { createSelector } from '@reduxjs/toolkit/dist';
export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContactsFilter = state => state.filters.filter;
// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectContactsFilter],
//   (contacts, filters) => {
//     const filterLowCase = filters.toLowerCase().trim();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterLowCase)
//     );
//   }
// );
