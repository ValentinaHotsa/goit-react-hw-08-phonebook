// import ContactForm from 'components/contactForm/ContactForm';
// import ContactList from 'components/contactList/ContactList';
// import Filter from 'components/filter/Filter';
// import css from './App.module.css';
// import RegisterForm from './RegisterForm/RegisterForm';
// import { Link } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import Layout from './Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../src/redux/auth/authOperations';
import useAuth from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgb(59, 55, 55)',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      {/* <div className={css.container}>
        <h1 className={css.titlePage}>Phonebook</h1>
        <h2 className={css.titleLogin}>
          Please login to view your contact list
        </h2>
        <form className={css.formLogin} autoComplete="off">
          <label className={css.label}>
            Email
            <input type="email" name="email" className={css.inputLogin} />
          </label>
          <label className={css.label}>
            Password
            <input type="password" name="password" className={css.inputLogin} />
          </label>
          <button className={css.buttonLogin} type="submit">
            Log In
          </button>
        </form>
        <div className={css.registerLink}>
          <h3>Don't have an account?</h3>
          <Link className={css.linkToRegister}>Create your account</Link>
        </div> */}
      {/* <ContactForm />

      <h2 className={css.titleList}>Contacts:</h2>
      <Filter />
      <ContactList /> */}
    </div>
  );
}
