import { NavLink } from 'react-router-dom';
import css from '../App.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={css.containerNavigation}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        {isLoggedIn ? (
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        ) : (
          <div className={css.containerSign}>
            <NavLink className={css.link} to="/register">
              Register
            </NavLink>
            <NavLink className={css.link} to="/login">
              Log In
            </NavLink>
          </div>
        )}
      </div>
      {isLoggedIn && <UserMenu />}
    </>
  );
};
