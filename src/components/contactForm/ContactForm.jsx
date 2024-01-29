import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contacts/contactsOperations';
import { selectContacts } from '../../redux/contacts/selectors';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handlerSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is alredy in contacts.`);
    }

    dispatch(addContact({ name, number }));

    form.reset();
  }

  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formInput}
          type="text"
          name="name"
          // value={name}
          // onChange={handleChange}
          required
        />
      </label>

      <label className={css.formLabel}>
        Number
        <input
          className={css.formInput}
          type="tel"
          name="number"
          // value={number}
          // onChange={handleChange}
          required
        />
      </label>

      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
