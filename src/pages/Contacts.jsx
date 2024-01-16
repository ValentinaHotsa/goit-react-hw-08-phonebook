import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import ContactList from 'components/contactList/ContactList';
import { fetchContacts } from '../redux/contacts/contactsOperations';
// import { selectLoading } from 'redux/tasks/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet> */}
      <title>Your contacts</title>
      {/* </Helmet> */}

      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
