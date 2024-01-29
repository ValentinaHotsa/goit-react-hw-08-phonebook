import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contactsOperations';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  // const filterValue = useSelector(selectContactsFilter).toLowerCase();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const handleDelete = e => {
  //   dispatch(deleteContact(e.currentTarget.id));
  // };

  // const getVisibilityContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterValue)
  //   );
  // };

  // const visibilityContacts = getVisibilityContacts();
  // console.log(visibilityContacts);
  // console.log(contacts);
  // console.log(filterValue);
  return contacts.length > 0 ? (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            id={contact.id}
            className={css.buttonDelete}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <form>
      <p>
        There are no contacts in your phonebook. Please add your first contact!
      </p>
    </form>
  );
};
export default ContactList;
