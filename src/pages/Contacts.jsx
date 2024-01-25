import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import ContactList from 'components/contactList/ContactList';
import { fetchContacts } from '../redux/contacts/contactsOperations';
// import { selectLoading } from 'redux/tasks/selectors';
import ContactForm from 'components/contactForm/ContactForm';
import Filter from 'components/filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  //  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your contacts</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && 'Request in progress...'}

      <ContactList />
    </div>
  );
}
