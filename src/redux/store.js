import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import { authReducer } from './auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
export default store;
