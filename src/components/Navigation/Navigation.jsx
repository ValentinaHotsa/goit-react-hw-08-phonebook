import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from '../App.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn ? (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      ) : (
        <div>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </div>
      )}
      {isLoggedIn && <UserMenu />}
    </nav>
  );
};
