import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../components/data/initialContacts.json';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: { contacts: initialContacts, filter: '' },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;
