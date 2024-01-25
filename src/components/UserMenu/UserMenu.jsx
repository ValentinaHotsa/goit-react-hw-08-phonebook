import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

import css from '../App.module.css';
import { selectUser } from '../../redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
