import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contacts/contactsOperations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  function handlerSubmit(evt) {
    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    };
    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      dispatch(addContact(newContact));

      evt.target.reset();
    }
  }

  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <label className={css.formLabel}>
        Name
        <input className={css.formInput} type="text" name="name" required />
      </label>

      <label className={css.formLabel}>
        Number
        <input className={css.formInput} type="tel" name="number" required />
      </label>

      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
