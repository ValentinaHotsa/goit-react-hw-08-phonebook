import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from '../contactForm/ContactForm.module.css';
import { Link } from 'react-router-dom';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <div className={css.containerForm}>
      {errorLogin && <div>Error login</div>}
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.formLabel}>
          Email
          <input
            className={css.formInput}
            type="email"
            id="inputEmail"
            name="email"
          />
        </label>
        <label className={css.formLabel}>
          Password
          <input
            className={css.formInput}
            id="inputPassword"
            type="password"
            name="password"
          />
        </label>
        <button className={css.formButton} type="submit">
          Log In
        </button>

        <Link to="/register">Registration</Link>
      </form>
    </div>
  );
};
