// import React, { Component } from 'react';
// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/phonebookReducer';
// import initialContacts from '../data/initialContacts.json';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

// Refactoring code using React-Hooks
const ContactForm = () => {
  const nameInputId = nanoid(5);
  const numberInputId = nanoid(5);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;
  // });

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onFormSubmit = event => {
    event.preventDefault();
    const { name, number } = event.currentTarget.elements;

    const contact = {
      id: nanoid(5),
      name: name.value,
      number: number.value,
    };

    if (onDuplicateContact(name.value)) {
      alert(`${name.value} is already in contacts`);
      event.currentTarget.reset();
      name.focus();
      return;
    }

    // setContacts([contact, ...contacts]);
    dispatch(addContact(contact));
    event.currentTarget.reset();
  };

  const onDuplicateContact = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  // const deleteContact = contactId => {
  //   setContactList(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   return contactList
  //     .filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //     .sort((a, b) => a.name.localeCompare(b.name));
  // };

  return (
    <Form onSubmit={onFormSubmit} autoComplete="off">
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
      </Label>
      <Button type="submit" aria-label="Add contact">
        Add contact
      </Button>
    </Form>
  );
  // }
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default ContactForm;
