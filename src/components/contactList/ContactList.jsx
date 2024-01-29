import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import {
  selectContacts,
  selectContactsFilter,
} from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  const dispatch = useDispatch();

  // const handleDelete = e => {
  //   dispatch(deleteContact(e.currentTarget.id));
  // };

  const getVisibilityContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();
  // console.log(visibilityContacts);
  // console.log(contacts);
  // console.log(filterValue);
  return (
    <div className={css.containerList}>
      {!visibilityContacts?.length && (
        <p>
          There are no contacts in your phonebook. Please add your first
          contact!
        </p>
      )}
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ul className={css.contactList}>
        {visibilityContacts.map(contact => (
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
    </div>
  );
};
export default ContactList;
