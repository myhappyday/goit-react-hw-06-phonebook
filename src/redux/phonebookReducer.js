import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../components/data/initialContacts.json';

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: { contacts: initialContacts, filter: '' },
  reducers: {
    addContact: (state, action) => {
      //   state.contacts = action.payload;
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      //   const index = state.findIndex(contact => contact.id === action.payload);
      //   state.contacts.splice(index, 1);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
// console.log('phonebookSlice.actions: ', phonebookSlice.actions);

export const phonebookReducer = phonebookSlice.reducer;
// console.log('phonebookReducer: ', phonebookReducer);

// export const phonebookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case 'filter/setFilter': {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const addContact = contact => {
//   return {
//     type: 'contacts/addContact',
//     payload: contact,
//   };
// };

// export const deleteContact = id => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: id,
//   };
// };

// export const setFilter = value => {
//   return {
//     type: 'filter/setFilter',
//     payload: value,
//   };
// };
